-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_cartId_fkey";

-- CreateTable
CREATE TABLE "_CartToItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CartToItem_AB_unique" ON "_CartToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_CartToItem_B_index" ON "_CartToItem"("B");

-- AddForeignKey
ALTER TABLE "_CartToItem" ADD FOREIGN KEY ("A") REFERENCES "Cart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartToItem" ADD FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
