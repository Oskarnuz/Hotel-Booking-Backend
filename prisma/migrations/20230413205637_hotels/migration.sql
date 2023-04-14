/*
  Warnings:

  - You are about to drop the `Hotel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Hotel";

-- CreateTable
CREATE TABLE "Hotels" (
    "id" TEXT NOT NULL,
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

    CONSTRAINT "Hotels_pkey" PRIMARY KEY ("id")
);
