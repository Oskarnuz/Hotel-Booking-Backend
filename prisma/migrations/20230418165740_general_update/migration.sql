/*
  Warnings:

  - The primary key for the `Amenities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Amenities` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `EmailSubcribers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `EmailSubcribers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Inclusions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Inclusions` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Policies` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Policies` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Reviews` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Reviews` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Tags` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Amenities" DROP CONSTRAINT "Amenities_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Amenities_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "EmailSubcribers" DROP CONSTRAINT "EmailSubcribers_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "EmailSubcribers_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Inclusions" DROP CONSTRAINT "Inclusions_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Inclusions_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Policies" DROP CONSTRAINT "Policies_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Policies_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Tags" DROP CONSTRAINT "Tags_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Tags_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Product";
