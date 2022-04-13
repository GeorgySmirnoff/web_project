/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Sale` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Made the column `image` on table `Sale` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Sale` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Sale" ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Sale_name_key" ON "Sale"("name");
