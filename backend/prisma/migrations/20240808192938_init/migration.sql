/*
  Warnings:

  - A unique constraint covering the columns `[frameId]` on the table `Todo` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
CREATE SEQUENCE todo_frameid_seq;
ALTER TABLE "Todo" ALTER COLUMN "frameId" SET DEFAULT nextval('todo_frameid_seq');
ALTER SEQUENCE todo_frameid_seq OWNED BY "Todo"."frameId";

-- CreateIndex
CREATE UNIQUE INDEX "Todo_frameId_key" ON "Todo"("frameId");
