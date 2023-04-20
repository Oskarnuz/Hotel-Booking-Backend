/*
  Warnings:

  - You are about to drop the column `Tags` on the `Hotels` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Hotels" DROP COLUMN "Tags";

-- CreateTable
CREATE TABLE "_HotelsToTags" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HotelsToTags_AB_unique" ON "_HotelsToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_HotelsToTags_B_index" ON "_HotelsToTags"("B");

-- AddForeignKey
ALTER TABLE "_HotelsToTags" ADD CONSTRAINT "_HotelsToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Hotels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HotelsToTags" ADD CONSTRAINT "_HotelsToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
