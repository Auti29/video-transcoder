import express, {type Request, type Response} from "express";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3client } from "./cloudflare.js";
import cors from "cors";
import { v4 as uuidv4 } from 'uuid';
import { PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import { createClient } from "redis";
dotenv.config();

const BUCKET = process.env.BUCKET;   
const publisher = createClient();
publisher.connect();


const app = express();
app.use(express.json());
app.use(cors());

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

    res.status(200).json({
        uploadUrl, 
        key, 
        jobId
    });
    }catch(err){
        console.log("error occured while generating signed url: ", err);
        res.status(500).json({
            message: "internal server error"
        });
    }
});

app.post('/transcode', (req, res) => {
    const {jobId, key}  = req.body;
    if(!jobId || !key) res.status(422).json({
        message: "required parameters are missing!"
    });

    const obj = {
        jobId,
        key
    };

    const serializedObj = JSON.stringify(obj);

    publisher.rPush('job-queue', serializedObj);

    //update the status in db

    res.status(200).json({
        message: "job pushed into the queue...", 
        state: "pending"
    });
});


app.listen(3001, () => console.log("http up"));