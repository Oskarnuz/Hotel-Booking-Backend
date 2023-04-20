/*
  Warnings:

  - A unique constraint covering the columns `[Name]` on the table `Amenities` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Amenities_Name_key" ON "Amenities"("Name");
