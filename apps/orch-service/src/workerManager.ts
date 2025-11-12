import Docker from "dockerode";
import dotenv from "dotenv";

dotenv.config();

const docker = new Docker({ socketPath: "/var/run/docker.sock" });

interface workerI {
    id: string;
    container: Docker.Container;
}

const runningWorkers = new Set<workerI>();

const spawnWorker = async () => {
    try{    
        const container = await docker.createContainer({
            Image: process.env.WORKER_IMAGE || "worker-svc", 
            HostConfig: {
                AutoRemove: true
            }
        });

        await container.start();
        
        console.log(`container with container-id: ${container.id} has started...`);

        runningWorkers.add({
            id: container.id, 
            container
        });
        
    }catch(err){    
        console.log("error while spawning the worker container: ", err);
    }
}

export {runningWorkers, spawnWorker};