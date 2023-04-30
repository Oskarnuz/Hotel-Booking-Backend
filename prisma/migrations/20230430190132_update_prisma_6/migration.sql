/*
  Warnings:

  - You are about to drop the column `CardCcv` on the `Payments` table. All the data in the column will be lost.
  - You are about to drop the column `CardMonth` on the `Payments` table. All the data in the column will be lost.
  - You are about to drop the column `CardYear` on the `Payments` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bookingsId]` on the table `Payments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `BasePrice` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FinalPrice` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PromoCode` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Tax` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payments" DROP COLUMN "CardCcv",
DROP COLUMN "CardMonth",
DROP COLUMN "CardYear",
ADD COLUMN     "BasePrice" INTEGER NOT NULL,
ADD COLUMN     "FinalPrice" INTEGER NOT NULL,
ADD COLUMN     "PromoCode" BOOLEAN NOT NULL,
ADD COLUMN     "Tax" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Payments_bookingsId_key" ON "Payments"("bookingsId");
