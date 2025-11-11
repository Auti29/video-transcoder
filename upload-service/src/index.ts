import express from "express";
import { FilesUpload } from "./utils/multer.js";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/v1/upload-video', FilesUpload.single('video') ,(req, res) => {
    res.send("File");
});




app.listen(3000, () => console.log("up."));