/*
  Warnings:

  - Changed the type of `date` on the `Todo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `priority` on the `Todo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "Todo_frameId_key";

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "frameId" DROP DEFAULT,
DROP COLUMN "priority",
ADD COLUMN     "priority" "Priority" NOT NULL;
DROP SEQUENCE "todo_frameid_seq";
