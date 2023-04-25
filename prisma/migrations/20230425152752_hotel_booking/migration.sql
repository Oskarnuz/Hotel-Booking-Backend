/*
  Warnings:

  - You are about to drop the column `hotelsId` on the `Reviews` table. All the data in the column will be lost.
  - You are about to drop the `_AmenitiesToRooms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_HotelsToPolicies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_HotelsToTags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_InclusionsToRooms` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Tags` to the `Hotels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Amenities` to the `Rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Inclusions` to the `Rooms` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_hotelsId_fkey";

-- DropForeignKey
ALTER TABLE "_AmenitiesToRooms" DROP CONSTRAINT "_AmenitiesToRooms_A_fkey";

-- DropForeignKey
ALTER TABLE "_AmenitiesToRooms" DROP CONSTRAINT "_AmenitiesToRooms_B_fkey";

-- DropForeignKey
ALTER TABLE "_HotelsToPolicies" DROP CONSTRAINT "_HotelsToPolicies_A_fkey";

-- DropForeignKey
ALTER TABLE "_HotelsToPolicies" DROP CONSTRAINT "_HotelsToPolicies_B_fkey";

-- DropForeignKey
ALTER TABLE "_HotelsToTags" DROP CONSTRAINT "_HotelsToTags_A_fkey";

-- DropForeignKey
ALTER TABLE "_HotelsToTags" DROP CONSTRAINT "_HotelsToTags_B_fkey";

-- DropForeignKey
ALTER TABLE "_InclusionsToRooms" DROP CONSTRAINT "_InclusionsToRooms_A_fkey";

-- DropForeignKey
ALTER TABLE "_InclusionsToRooms" DROP CONSTRAINT "_InclusionsToRooms_B_fkey";

-- AlterTable
ALTER TABLE "Hotels" ADD COLUMN     "Tags" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reviews" DROP COLUMN "hotelsId";

-- AlterTable
ALTER TABLE "Rooms" ADD COLUMN     "Amenities" TEXT NOT NULL,
ADD COLUMN     "Inclusions" TEXT NOT NULL;

-- DropTable
DROP TABLE "_AmenitiesToRooms";

-- DropTable
DROP TABLE "_HotelsToPolicies";

-- DropTable
DROP TABLE "_HotelsToTags";

-- DropTable
DROP TABLE "_InclusionsToRooms";
