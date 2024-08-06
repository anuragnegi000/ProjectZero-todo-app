import express from "express";
import { listFrames, addFrame } from "../controllers/frameController";

const router = express.Router();

router.get("/frames", listFrames);
router.post("/frames", addFrame);

export default router;
