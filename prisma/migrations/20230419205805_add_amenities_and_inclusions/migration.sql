/*
  Warnings:

  - You are about to drop the column `Amenities` on the `Rooms` table. All the data in the column will be lost.
  - You are about to drop the column `Inclusions` on the `Rooms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Amenities" ADD COLUMN     "roomsId" TEXT;

-- AlterTable
ALTER TABLE "Inclusions" ADD COLUMN     "roomsId" TEXT;

-- AlterTable
ALTER TABLE "Rooms" DROP COLUMN "Amenities",
DROP COLUMN "Inclusions";

-- AddForeignKey
ALTER TABLE "Amenities" ADD CONSTRAINT "Amenities_roomsId_fkey" FOREIGN KEY ("roomsId") REFERENCES "Rooms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inclusions" ADD CONSTRAINT "Inclusions_roomsId_fkey" FOREIGN KEY ("roomsId") REFERENCES "Rooms"("id") ON DELETE SET NULL ON UPDATE CASCADE;
