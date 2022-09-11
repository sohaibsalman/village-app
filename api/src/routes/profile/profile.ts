import express, { Request, Response } from "express";
import upload from "../../config/multer";

const router = express.Router();

router.post(
  "/api/profile/avatar",
  upload.single("avatar"),
  (req: Request, res: Response) => {
    res.send(req.file?.filename);
  }
);

export { router as profileRouter };
