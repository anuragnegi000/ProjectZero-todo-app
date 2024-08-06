import { Request, Response } from "express";
import { getFrames, createFrame } from "../models/frameModel";

export const listFrames = async (req: Request, res: Response) => {
  const frames = await getFrames();
  res.json(frames);
};

export const addFrame = async (req: Request, res: Response) => {
  const { name } = req.body;
  const frame = await createFrame(name);
  res.status(201).json(frame);
};
