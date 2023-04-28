import { PrismaClient } from "@prisma/client";
import seedReview from "./reviewSeeder";
import seedHotel from "./hotelSeeder";

const prisma = new PrismaClient()

const seeders = [ seedReview ]

const seed = async() => {
  for(const seeder of seeders) {
    await seeder(prisma)
  }
}

seed()
  .catch((error) => {
    console.error("ERROR", error);
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect();
  })

  export default seed