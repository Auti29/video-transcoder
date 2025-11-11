import express, {type Request, type Response} from "express";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3client } from "./cloudflare.js";
import cors from "cors";
import { v4 as uuidv4 } from 'uuid';
import { PutObjectCommand } from "@aws-sdk/client-s3";

const app = express();
app.use(express.json());
app.use(cors());

app.post('/presign-upload', async (req: Request, res: Response) => {
    const jobId = uuidv4();
    const key = `uploads/${jobId}.mp4`;

    try{const command = new PutObjectCommand({
    Bucket: "raw-videos-bucket",
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



app.listen(3001, () => console.log("http up"));