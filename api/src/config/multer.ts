import multer from "multer";
import path from "path";
import fs from "fs";

import { config } from "../config";

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const fullPath = `${config.server.root}/uploads`;
    fs.mkdir(fullPath, () => {
      cb(null, `${config.server.root}/uploads`);
    });
  },
  filename(req, file, callback) {
    const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
    callback(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

export default upload;
