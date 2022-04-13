/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Item` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Sale" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "description" TEXT,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_name_key" ON "Item"("name");
