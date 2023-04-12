/*
  Warnings:

  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Room";

-- CreateTable
CREATE TABLE "Rooms" (
    "room_id" TEXT NOT NULL,
    "Available" BOOLEAN NOT NULL,
    "RoomImg" TEXT NOT NULL,
    "RoomName" TEXT NOT NULL,
    "OriginalPricePerNight" INTEGER NOT NULL,
    "Discount" INTEGER NOT NULL,
    "About" TEXT NOT NULL,
    "Facility" TEXT NOT NULL,

    CONSTRAINT "Rooms_pkey" PRIMARY KEY ("room_id")
);
