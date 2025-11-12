import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import path, { resolve } from "node:path";
import fs from "node:fs";
import { type Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import { Resolutions } from "./utils.js";

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

dotenv.config();



const REGION = "auto"; 
const R2_ENDPOINT = process.env.R2_URL;
const ACCESS_KEY_ID = process.env.R2_ID;
const SECRET_ACCESS_KEY = process.env.R2_SECRET;
const BUCKET = process.env.BUCKET; 
const RAW_VIDEOS_BUCKET = process.env.RAW_VIDEOS_BUCKET; 


const s3client = new S3Client({
  region: REGION,
  endpoint: R2_ENDPOINT!,
  credentials: {
    accessKeyId: ACCESS_KEY_ID!,
    secretAccessKey: SECRET_ACCESS_KEY!,
  },
  forcePathStyle: true
});


//@ts-ignore
async function pullAndTranscodeVideo({jobId, key}){
    if(!jobId || !key) return;
    
    const getCmd = new GetObjectCommand({
        Bucket: RAW_VIDEOS_BUCKET!, 
        Key: `videos/${jobId}.mp4`
    });

    try{

    const res = await s3client.send(getCmd);

    if(!res.Body) return;

    const body = res.Body as Readable;
    const jobDir = path.join('/tmp/jobs', jobId);
    fs.mkdirSync(jobDir, { recursive: true });

    const inputPath = path.join(jobDir, 'input.mp4');

    const fileStream = fs.createWriteStream(inputPath);
    await pipeline(body, fileStream);


    const transcodedfiles = Resolutions.map((resolution) => {
        return new Promise((res, rej) => {
            const outPath = path.join(jobDir, `output_${res.name}p.mp4`);

            ffmpeg(inputPath)
            .videoCodec("libx264")
            .audioCodec("aac")
            .outputOptions([`-vf scale=-2:${resolution.name}`])
            .on('start', (cmd) => console.log(`Started transcoding ${resolution.name}p: ${cmd}`))
            .on('end', () => {
            (async () => {
                    try {
                    const fileStream = fs.createReadStream(outPath);
                    const putCmd = new PutObjectCommand({
                        Bucket: BUCKET!,
                        Key: `videos/${jobId}/output_${resolution.name}p.mp4`,
                        Body: fileStream,
                        ContentType: 'video/mp4',
                    });
                    await s3client.send(putCmd);
                    console.log(`Finished and uploaded ${resolution.name}p`);
                    res({ resolution: resolution.name, outPath });
                    } catch (err) {
                    rej(err);
                    }
                })();
            })
            .on('error', (err) => {
            console.error(`Error transcoding ${resolution.name}p`, err);
            rej(err);
            })
            .save(outPath);
        });
    });

    await Promise.all(transcodedfiles);

}
    catch(err){
        console.log("error occured while pulling the raw video: ", err);
    }
    finally{
        process.exit(0);
    }
}


export {pullAndTranscodeVideo};