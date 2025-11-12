import { pollQueue } from "./queueWatcher.js";


async function main() {
    console.log("orchastrator start...");

    while(true){
        await pollQueue();
        await new Promise((res) => setTimeout(res, 3000));
    }
}

main();
