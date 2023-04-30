/*
  Warnings:

  - You are about to drop the column `DateOfStay` on the `Bookings` table. All the data in the column will be lost.
  - Added the required column `CheckInDate` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CheckOutDate` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HotelCity` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HotelCountry` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SpecialReqs` to the `Bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookings" DROP COLUMN "DateOfStay",
ADD COLUMN     "CheckInDate" TEXT NOT NULL,
ADD COLUMN     "CheckOutDate" TEXT NOT NULL,
ADD COLUMN     "HotelCity" TEXT NOT NULL,
ADD COLUMN     "HotelCountry" TEXT NOT NULL,
ADD COLUMN     "SpecialReqs" TEXT NOT NULL;
