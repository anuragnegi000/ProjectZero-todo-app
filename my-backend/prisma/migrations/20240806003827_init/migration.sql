-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Frame" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Frame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "priority" TEXT NOT NULL,
    "frameId" INTEGER NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Frame" ADD CONSTRAINT "Frame_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_frameId_fkey" FOREIGN KEY ("frameId") REFERENCES "Frame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
