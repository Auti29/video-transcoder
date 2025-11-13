import Docker from "dockerode";
import dotenv from "dotenv";

dotenv.config();

const DOCKER_HOST = process.env.DOCKER_HOST;
const DOCKER_PORT = process.env.DOCKER_PORT;

// const docker = new Docker({ socketPath: "/var/run/docker.sock" });

const docker = new Docker({
    host: DOCKER_HOST, 
    port: DOCKER_PORT
});

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
                AutoRemove: true, 
                NetworkMode: "host"
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