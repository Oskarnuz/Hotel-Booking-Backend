/*
  Warnings:

  - You are about to drop the `Customers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Customers";

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);
