/*
  Warnings:

  - You are about to drop the column `date` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `frameId` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `priority` on the `Todo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_frameId_fkey";

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "date",
DROP COLUMN "frameId",
DROP COLUMN "priority";
