import multer, { type FileFilterCallback } from "multer";
import { type Request } from "express";
import { IncomingMessage } from 'http';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilterVideo = (req: any, file: Express.Multer.File, cb:  (error: any, acceptFile: boolean) => void) => {
    if(file.mimetype === 'video/mp4'){
        cb(null,true);
    }else{
        cb(new Error('Unsupported File Format'), false)
    }
};


export const FilesUpload = multer({ storage: storage, fileFilter: fileFilterVideo });
