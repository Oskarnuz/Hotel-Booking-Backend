/*
  Warnings:

  - You are about to drop the `Rooms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Rooms";

-- CreateTable
CREATE TABLE "Room" (
    "room_id" TEXT NOT NULL,
    "Available" BOOLEAN NOT NULL,
    "RoomImg" TEXT NOT NULL,
    "RoomName" TEXT NOT NULL,
    "Amenities" TEXT NOT NULL,
    "Inclusions" TEXT NOT NULL,
    "OriginalPricePerNight" INTEGER NOT NULL,
    "Discount" INTEGER NOT NULL,
    "About" TEXT NOT NULL,
    "Facility" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("room_id")
);
