import { createClient } from "redis"
import dotenv from "dotenv";
import { runningWorkers, spawnWorker } from "./workerManager.js";

dotenv.config();

const redis = createClient();
await redis.connect();

export const pollQueue = async () => {
    try
    {
        const queueLength = await redis.lLen("job-queue");
        console.log(`queue length: ${queueLength} | current running workers: ${runningWorkers.size}`);

        const minWorkers = Number(process.env.MIN_WORKERS || 1);
        const maxWorkers = Number(process.env.MAX_WORKERS || 5);
        const threshold = Number(process.env.THRESHOLD || 1);

        for(const worker of Array.from(runningWorkers)){
            try{
                const inspectData = await worker.container.inspect();

                if(inspectData.State.Status != "running"){
                    runningWorkers.delete(worker);
                    console.log(`worker with id ${worker.id} is stopped and deleted`);
                }
            
            }catch{
                runningWorkers.delete(worker);
            }
        }


        while(queueLength > runningWorkers.size * threshold && runningWorkers.size < maxWorkers){
            await spawnWorker();
        }
        
        //warm start
        if (runningWorkers.size < minWorkers) {
            const toSpawn = minWorkers - runningWorkers.size;
            for (let i = 0; i < toSpawn; i++) {
                await spawnWorker();
            }
        }
    }
    catch(err){
        console.log("error occured while orchastrating workers: ", err);
    }
}