/*
  Warnings:

  - You are about to drop the column `roomsId` on the `Amenities` table. All the data in the column will be lost.
  - You are about to drop the column `roomsId` on the `Inclusions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Amenities" DROP CONSTRAINT "Amenities_roomsId_fkey";

-- DropForeignKey
ALTER TABLE "Inclusions" DROP CONSTRAINT "Inclusions_roomsId_fkey";

-- AlterTable
ALTER TABLE "Amenities" DROP COLUMN "roomsId";

-- AlterTable
ALTER TABLE "Inclusions" DROP COLUMN "roomsId";

-- CreateTable
CREATE TABLE "_AmenitiesToRooms" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_InclusionsToRooms" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AmenitiesToRooms_AB_unique" ON "_AmenitiesToRooms"("A", "B");

-- CreateIndex
CREATE INDEX "_AmenitiesToRooms_B_index" ON "_AmenitiesToRooms"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_InclusionsToRooms_AB_unique" ON "_InclusionsToRooms"("A", "B");

-- CreateIndex
CREATE INDEX "_InclusionsToRooms_B_index" ON "_InclusionsToRooms"("B");

-- AddForeignKey
ALTER TABLE "_AmenitiesToRooms" ADD CONSTRAINT "_AmenitiesToRooms_A_fkey" FOREIGN KEY ("A") REFERENCES "Amenities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AmenitiesToRooms" ADD CONSTRAINT "_AmenitiesToRooms_B_fkey" FOREIGN KEY ("B") REFERENCES "Rooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InclusionsToRooms" ADD CONSTRAINT "_InclusionsToRooms_A_fkey" FOREIGN KEY ("A") REFERENCES "Inclusions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InclusionsToRooms" ADD CONSTRAINT "_InclusionsToRooms_B_fkey" FOREIGN KEY ("B") REFERENCES "Rooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
