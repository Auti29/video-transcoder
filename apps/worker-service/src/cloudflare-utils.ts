import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import path, { resolve } from "node:path";
import fs from "node:fs";
import { type Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import { Resolutions } from "./utils.js";
import redis, { createClient } from "redis";

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

    const channel = `job_logs_${jobId}`;

    const publisher = createClient();

    publisher.on("error", (err) => console.error("Redis error:", err));
    publisher.on("reconnecting", () => console.log("Reconnecting to Redis..."));


    await publisher.connect();

    await publisher.publish(channel, `spawned a docker container for job: ${jobId}`);

    
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

    await publisher.publish(channel, "transcoding started...");

    const transcodedfiles = Resolutions.map((resolution) => {
        return new Promise((res, rej) => {
            const outPath = path.join(jobDir, `output_${res.name}p.mp4`);

            ffmpeg(inputPath)
            .videoCodec("libx264")
            .audioCodec("aac")
            .outputOptions([`-vf scale=-2:${resolution.name}`])
            .on('start', async (cmd) => {
                console.log(`started transcoding ${resolution.name}p: ${cmd}`)
                await publisher.publish(channel, `started transcoding ${resolution.name}p`);
            })
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
                    await publisher.publish(channel, `Finished and uploaded ${resolution.name}p`);
                    res({ resolution: resolution.name, outPath });
                    } catch (err) {
                    console.log(`error occured while transcoding ${resolution.name}p video: `, err);
                    await publisher.publish(channel, `error occured while transcoding ${resolution.name}p video`);
                    rej(err);
                    }
                })();
            })
            .on('error', async (err) => {
            console.error(`Error transcoding ${resolution.name}p`, err);
            await publisher.publish(channel, `Error transcoding ${resolution.name}p`);
            rej(err);
            })
            .save(outPath);
        });
    });

    await Promise.all(transcodedfiles);

}
    catch(err){
        console.log("error occured while pulling and transcoding the raw video: ", err);
        await publisher.publish(channel, `job: ${jobId} | status: FAILED!!!`);
    }
    finally{
        await publisher.publish(channel, `job: ${jobId} | status: done`);
        await publisher.quit();
        process.exit(0);
    }
}


export {pullAndTranscodeVideo};