/*
  Warnings:

  - You are about to drop the column `Amenities` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `Inclusions` on the `Room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "Amenities",
DROP COLUMN "Inclusions";
