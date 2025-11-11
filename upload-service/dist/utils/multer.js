import multer, {} from "multer";
import {} from "express";
import { IncomingMessage } from 'http';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const fileFilterVideo = (req, file, cb) => {
    if (file.mimetype === 'video/mp4') {
        cb(null, true);
    }
    else {
        cb(new Error('Unsupported File Format'), false);
    }
};
export const FilesUpload = multer({ storage: storage, fileFilter: fileFilterVideo });
//# sourceMappingURL=multer.js.map