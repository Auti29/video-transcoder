import { createClient } from "redis";
import { pullAndTranscodeVideo } from "./cloudflare-utils.js";

const subscriber = createClient();
subscriber.connect();

async function init () {
    console.log("running...")
    while(1){
        const res = await subscriber.blPop('job-queue', 0);
        if(!res) continue;

        console.log(res);

        const elem = res.element;
        const obj = JSON.parse(elem);
        //db: update status of job: in_progress
        await pullAndTranscodeVideo(obj);
    }
}


init();