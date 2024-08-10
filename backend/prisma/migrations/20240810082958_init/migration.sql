-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "frameId" INTEGER,
ADD COLUMN     "priority" TEXT;

-- DropEnum
DROP TYPE "Priority";

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_frameId_fkey" FOREIGN KEY ("frameId") REFERENCES "Frame"("id") ON DELETE SET NULL ON UPDATE CASCADE;
