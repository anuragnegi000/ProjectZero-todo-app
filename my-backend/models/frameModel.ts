import { prisma } from "../utils/database";

export const getFrames = async () => {
  return prisma.frame.findMany();
};

export const createFrame = async (name: string) => {
  return prisma.frame.create({
    data: { name },
  });
};
