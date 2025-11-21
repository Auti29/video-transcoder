import express, {type Request, type Response} from "express";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3client } from "./cloudflare.js";
import cors from "cors";
import { v4 as uuidv4 } from 'uuid';
import { PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import { createClient } from "redis";
import router from "./routes/userRoutes.js";
import { prismaClient } from "@repo/db/client";


dotenv.config();

const BUCKET = process.env.BUCKET;   
const publisher = createClient();
publisher.connect();


const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/user', router);

app.get('/presign-upload', async (req: Request, res: Response) => {
    const jobId = uuidv4();
    const key = `videos/${jobId}.mp4`;

    try{
    const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    ContentType: "video/mp4",
  });

    const uploadUrl = await getSignedUrl(s3client, command, { expiresIn: 3600 });

    const newJob = await prismaClient.job.create({
        data: {
            presigned_job_id: jobId, 
            status: "PENDING",    
        }
    });    

    res.status(200).json({
        uploadUrl, 
        key, 
        jobId, 
        currentJob: newJob.id
    });
    }catch(err){
        console.log("error occured while generating signed url: ", err);
        res.status(500).json({
            message: "internal server error"
        });
    }
});

app.post('/transcode', async (req, res) => {
    const {jobId, key, currentJobId}  = req.body;
    if(!jobId || !key) res.status(422).json({
        message: "required parameters are missing!"
    }); 


    const obj = {
        jobId,
        key, 
        currentJobId
    };

    const serializedObj = JSON.stringify(obj);

    publisher.rPush('job-queue', serializedObj);

    const currentJob = await prismaClient.job.update({
        where: {
            id: currentJobId
        }, 
        data: {
            status: "QUEUED"
        }
    });

    res.status(200).json({
        message: "job pushed into the queue...", 
        status: "pending", 
        currentJobId: currentJob.id
    });
});


app.get('/jobs/:jobId/logs/stream', async (req, res) => {
    const {jobId} = req.params;

    if(!jobId) return res.status(400).json({
        message: `jobId parameter is not found`
    });

    const subscriber = publisher.duplicate();
    await subscriber.connect();

    const channel = `job_logs_${jobId}`;

    //sse
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();

    console.log(`connected to log stream for job ${jobId}`);

    await subscriber.subscribe(channel, (message) => {
        res.write(`data: ${message}\n\n`);
    });


    req.on("close", async () => {
        console.log(`disconnected job_logs for job ${jobId}`);
        await subscriber.unsubscribe(channel);
        await subscriber.quit();
        res.end();
    });

});


app.listen(3001, () => console.log("http up"));