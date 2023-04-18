/*
  Warnings:

  - You are about to drop the column `usersId` on the `Bookings` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bookings" DROP CONSTRAINT "Bookings_usersId_fkey";

-- AlterTable
ALTER TABLE "Bookings" DROP COLUMN "usersId",
ADD COLUMN     "OwnerId" TEXT;

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_OwnerId_fkey" FOREIGN KEY ("OwnerId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
