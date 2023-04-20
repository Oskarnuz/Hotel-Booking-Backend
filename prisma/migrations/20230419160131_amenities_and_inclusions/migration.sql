-- AlterTable
ALTER TABLE "Rooms" ALTER COLUMN "Amenities" DROP NOT NULL,
ALTER COLUMN "Inclusions" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Amenities" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,

    CONSTRAINT "Amenities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inclusions" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,

    CONSTRAINT "Inclusions_pkey" PRIMARY KEY ("id")
);
