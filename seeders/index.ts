import { PrismaClient } from "@prisma/client";
import seedRoom from "./roomSeeder";
import seedProduct from "./productSeeder";
import seedReview from "./reviewSeeder";

const prisma = new PrismaClient()

const seeders = [ seedProduct, seedRoom, seedReview ]

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