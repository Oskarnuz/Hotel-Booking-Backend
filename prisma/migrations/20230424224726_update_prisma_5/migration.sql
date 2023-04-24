/*
  Warnings:

  - You are about to drop the column `usersId` on the `Roles` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `NumberOfGuest` on the `Bookings` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `CardNumber` on the `Payments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `CardType` on the `Payments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `CardYear` on the `Payments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `CardMonth` on the `Payments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `CardCcv` on the `Payments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `roleId` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Roles" DROP CONSTRAINT "Roles_usersId_fkey";

-- AlterTable
ALTER TABLE "Bookings" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "NumberOfGuest",
ADD COLUMN     "NumberOfGuest" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Payments" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "CardNumber",
ADD COLUMN     "CardNumber" INTEGER NOT NULL,
DROP COLUMN "CardType",
ADD COLUMN     "CardType" INTEGER NOT NULL,
DROP COLUMN "CardYear",
ADD COLUMN     "CardYear" INTEGER NOT NULL,
DROP COLUMN "CardMonth",
ADD COLUMN     "CardMonth" INTEGER NOT NULL,
DROP COLUMN "CardCcv",
ADD COLUMN     "CardCcv" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Roles" DROP COLUMN "usersId";

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "roleId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
