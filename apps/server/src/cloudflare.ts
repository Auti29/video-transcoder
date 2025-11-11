import { S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
dotenv.config();

const REGION = "auto"; 
const R2_ENDPOINT = process.env.R2_URL;
const ACCESS_KEY_ID = process.env.R2_ID;
const SECRET_ACCESS_KEY = process.env.R2_SECRET;
const BUCKET = process.env.BUCKET;   


const s3client = new S3Client({
  region: REGION,
  endpoint: R2_ENDPOINT!,
  credentials: {
    accessKeyId: ACCESS_KEY_ID!,
    secretAccessKey: SECRET_ACCESS_KEY!,
  },
  forcePathStyle: true
});


export {s3client};