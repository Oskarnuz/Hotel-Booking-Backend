/*
  Warnings:

  - You are about to drop the column `Policies` on the `Hotels` table. All the data in the column will be lost.
  - You are about to drop the column `Reviews` on the `Hotels` table. All the data in the column will be lost.
  - You are about to drop the column `Rooms` on the `Hotels` table. All the data in the column will be lost.
  - You are about to drop the column `Tags` on the `Hotels` table. All the data in the column will be lost.
  - You are about to drop the column `bookings` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Amenities" ADD COLUMN     "roomsId" TEXT;

-- AlterTable
ALTER TABLE "Bookings" ADD COLUMN     "usersId" TEXT;

-- AlterTable
ALTER TABLE "Hotels" DROP COLUMN "Policies",
DROP COLUMN "Reviews",
DROP COLUMN "Rooms",
DROP COLUMN "Tags";

-- AlterTable
ALTER TABLE "Inclusions" ADD COLUMN     "roomsId" TEXT;

-- AlterTable
ALTER TABLE "Payments" ADD COLUMN     "bookingsId" TEXT;

-- AlterTable
ALTER TABLE "Policies" ADD COLUMN     "hotelsId" TEXT;

-- AlterTable
ALTER TABLE "Reviews" ADD COLUMN     "hotelsId" TEXT;

-- AlterTable
ALTER TABLE "Roles" ADD COLUMN     "usersId" TEXT;

-- AlterTable
ALTER TABLE "Rooms" ADD COLUMN     "hotelsId" TEXT;

-- AlterTable
ALTER TABLE "Tags" ADD COLUMN     "hotelsId" TEXT;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "bookings",
DROP COLUMN "role";

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_hotelsId_fkey" FOREIGN KEY ("hotelsId") REFERENCES "Hotels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_hotelsId_fkey" FOREIGN KEY ("hotelsId") REFERENCES "Hotels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Policies" ADD CONSTRAINT "Policies_hotelsId_fkey" FOREIGN KEY ("hotelsId") REFERENCES "Hotels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rooms" ADD CONSTRAINT "Rooms_hotelsId_fkey" FOREIGN KEY ("hotelsId") REFERENCES "Hotels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Amenities" ADD CONSTRAINT "Amenities_roomsId_fkey" FOREIGN KEY ("roomsId") REFERENCES "Rooms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inclusions" ADD CONSTRAINT "Inclusions_roomsId_fkey" FOREIGN KEY ("roomsId") REFERENCES "Rooms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_bookingsId_fkey" FOREIGN KEY ("bookingsId") REFERENCES "Bookings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Roles" ADD CONSTRAINT "Roles_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
