import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient()

const seedReview = async (prisma: PrismaClient): Promise<void> => {
  const review_arr = []
  for(let i = 0; i < 5; i++) {
    const review = {
      rating: Math.floor(Math.random()* (5 - 2) + 2),
      user: faker.internet.userName(),
      date: faker.date.past(1),
      hotelReview: faker.lorem.paragraphs(3),
    }

    review_arr.push(review)
  }

  await prisma.reviews.createMany({
    data: review_arr
  })

  console.log('Reviews seeded successfully')
}

export default seedReview