/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `productsId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Review` table. All the data in the column will be lost.
  - Added the required column `reviews` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Date` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HotelReview` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Rating` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `User` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_productsId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "reviews" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "createdAt",
DROP COLUMN "productsId",
DROP COLUMN "rating",
DROP COLUMN "text",
DROP COLUMN "updatedAt",
ADD COLUMN     "Date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "HotelReview" TEXT NOT NULL,
ADD COLUMN     "Rating" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "User" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Hotels" (
    "HotelId" TEXT NOT NULL,
    "HotelName" TEXT NOT NULL,
    "Website" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "loc_Lat" TEXT NOT NULL,
    "loc_Lng" TEXT NOT NULL,
    "loc_Place" TEXT NOT NULL,
    "loc_City" TEXT NOT NULL,
    "loc_State" TEXT NOT NULL,
    "loc_Country" TEXT NOT NULL,
    "FrontImg" TEXT NOT NULL,
    "Gallery" TEXT NOT NULL,
    "PhoneNumber" TEXT NOT NULL,
    "CountryCode" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "HotelDescription" TEXT NOT NULL,
    "StarRating" DOUBLE PRECISION NOT NULL,
    "ReviewNumber" INTEGER NOT NULL,
    "Tags" TEXT NOT NULL,
    "SpecialTags" TEXT NOT NULL,
    "PopularityNumber" INTEGER NOT NULL,
    "DateAdded" TIMESTAMP(3) NOT NULL,
    "TrendingNumber" INTEGER NOT NULL,
    "SN_Facebook" TEXT NOT NULL,
    "SN_Twitter" TEXT NOT NULL,
    "SN_Instagram" TEXT NOT NULL,
    "SN_Pinterest" TEXT NOT NULL,
    "Reviews" TEXT NOT NULL,
    "Policies" TEXT NOT NULL,
    "Rooms" TEXT NOT NULL,

    CONSTRAINT "Hotels_pkey" PRIMARY KEY ("HotelId")
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Policies" (
    "id" TEXT NOT NULL,
    "policy1" TEXT NOT NULL,
    "policy2" TEXT NOT NULL,

    CONSTRAINT "Policies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rooms" (
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

    CONSTRAINT "Rooms_pkey" PRIMARY KEY ("room_id")
);

-- CreateTable
CREATE TABLE "Amenities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Amenities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inclusions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Inclusions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customers" (
    "CustomerId" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Gender" TEXT NOT NULL,
    "StreetAddress" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "State" TEXT NOT NULL,
    "ZipCode" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "PhoneNumber" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Bookings" TEXT NOT NULL,

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("CustomerId")
);

-- CreateTable
CREATE TABLE "Payments" (
    "PaymentsId" TEXT NOT NULL,
    "CardFirstName" TEXT NOT NULL,
    "CardSecondName" TEXT NOT NULL,
    "CardBankEntity" TEXT NOT NULL,
    "CardNumber" TEXT NOT NULL,
    "CardType" TEXT NOT NULL,
    "CardYear" TEXT NOT NULL,
    "CardMonth" TEXT NOT NULL,
    "CardCcv" TEXT NOT NULL,
    "Status" TEXT NOT NULL,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("PaymentsId")
);

-- CreateTable
CREATE TABLE "Booking" (
    "BookingId" TEXT NOT NULL,
    "HotelName" TEXT NOT NULL,
    "RoomType" TEXT NOT NULL,
    "DateOfStay" TIMESTAMP(3) NOT NULL,
    "NumberOfGuest" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("BookingId")
);
