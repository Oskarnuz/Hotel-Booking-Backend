/*
  Warnings:

  - You are about to drop the column `Policies` on the `Hotels` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Hotels" DROP COLUMN "Policies";

-- CreateTable
CREATE TABLE "_HotelsToPolicies" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HotelsToPolicies_AB_unique" ON "_HotelsToPolicies"("A", "B");

-- CreateIndex
CREATE INDEX "_HotelsToPolicies_B_index" ON "_HotelsToPolicies"("B");

-- AddForeignKey
ALTER TABLE "_HotelsToPolicies" ADD CONSTRAINT "_HotelsToPolicies_A_fkey" FOREIGN KEY ("A") REFERENCES "Hotels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HotelsToPolicies" ADD CONSTRAINT "_HotelsToPolicies_B_fkey" FOREIGN KEY ("B") REFERENCES "Policies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
