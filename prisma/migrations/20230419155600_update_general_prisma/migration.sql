/*
  Warnings:

  - You are about to drop the column `hotelsId` on the `Policies` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Policies` table. All the data in the column will be lost.
  - You are about to drop the column `hotelsId` on the `Tags` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Tags` table. All the data in the column will be lost.
  - You are about to drop the `Amenities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Inclusions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Name` to the `Policies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Amenities` to the `Rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Inclusions` to the `Rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `Tags` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Amenities" DROP CONSTRAINT "Amenities_roomsId_fkey";

-- DropForeignKey
ALTER TABLE "Inclusions" DROP CONSTRAINT "Inclusions_roomsId_fkey";

-- DropForeignKey
ALTER TABLE "Policies" DROP CONSTRAINT "Policies_hotelsId_fkey";

-- DropForeignKey
ALTER TABLE "Tags" DROP CONSTRAINT "Tags_hotelsId_fkey";

-- AlterTable
ALTER TABLE "Hotels" ADD COLUMN     "Policies" TEXT,
ADD COLUMN     "Tags" TEXT;

-- AlterTable
ALTER TABLE "Policies" DROP COLUMN "hotelsId",
DROP COLUMN "name",
ADD COLUMN     "Name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Rooms" ADD COLUMN     "Amenities" TEXT NOT NULL,
ADD COLUMN     "Inclusions" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tags" DROP COLUMN "hotelsId",
DROP COLUMN "name",
ADD COLUMN     "Name" TEXT NOT NULL;

-- DropTable
DROP TABLE "Amenities";

-- DropTable
DROP TABLE "Inclusions";
