-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "cartId" INTEGER;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE SET NULL ON UPDATE CASCADE;
