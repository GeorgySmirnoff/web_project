-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "image" TEXT,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "cartId" INTEGER,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ItemCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CartToItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Item_name_key" ON "Item"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Sale_name_key" ON "Sale"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ItemCategory_name_key" ON "ItemCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CartToItem_AB_unique" ON "_CartToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_CartToItem_B_index" ON "_CartToItem"("B");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ItemCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartToItem" ADD FOREIGN KEY ("A") REFERENCES "Cart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartToItem" ADD FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
