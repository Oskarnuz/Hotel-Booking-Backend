/*
  Warnings:

  - The primary key for the `Hotel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `HotelId` on the `Hotel` table. All the data in the column will be lost.
  - The primary key for the `Payments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `PaymentsId` on the `Payments` table. All the data in the column will be lost.
  - You are about to drop the column `policy1` on the `Policies` table. All the data in the column will be lost.
  - You are about to drop the column `policy2` on the `Policies` table. All the data in the column will be lost.
  - You are about to drop the column `Date` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `HotelReview` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `Rating` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `User` on the `Review` table. All the data in the column will be lost.
  - The primary key for the `Rooms` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `room_id` on the `Rooms` table. All the data in the column will be lost.
  - You are about to drop the `Booking` table. If the table is not empty, all the data it contains will be lost.
  - The required column `id` was added to the `Hotel` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Payments` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `name` to the `Policies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hotelReview` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `Review` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Rooms` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Hotel" DROP CONSTRAINT "Hotel_pkey",
DROP COLUMN "HotelId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Payments" DROP CONSTRAINT "Payments_pkey",
DROP COLUMN "PaymentsId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Payments_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Policies" DROP COLUMN "policy1",
DROP COLUMN "policy2",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "Date",
DROP COLUMN "HotelReview",
DROP COLUMN "Rating",
DROP COLUMN "User",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "hotelReview" TEXT NOT NULL,
ADD COLUMN     "rating" INTEGER NOT NULL,
ADD COLUMN     "user" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Rooms" DROP CONSTRAINT "Rooms_pkey",
DROP COLUMN "room_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Rooms_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Booking";

-- CreateTable
CREATE TABLE "Bookings" (
    "id" TEXT NOT NULL,
    "HotelName" TEXT NOT NULL,
    "RoomType" TEXT NOT NULL,
    "DateOfStay" TIMESTAMP(3) NOT NULL,
    "NumberOfGuest" TEXT NOT NULL,

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("id")
);
