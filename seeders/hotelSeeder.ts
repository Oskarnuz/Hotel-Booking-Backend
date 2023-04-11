import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient()

const seedHotel = async (prisma: PrismaClient): Promise<void> => {
  const hotels = []

  for(let i = 0; i < 200; i++) {
    let companyName = faker.company.companyName();
    const hotel = {
      name: faker.company.hotelName(),
      website: faker.internet.url(),
      location: faker.commerce.location(),
      category: faker.commerce.category(),
      loc_Lat: faker.address.latitude(),
      loc_Lng: faker.address.longitude(),
      loc_Place: faker.address.streetAddress(),
      loc_City: faker.address.city(),
      loc_State: faker.address.state(),
      loc_Country: faker.address.county(),
      frontImg: faker.image.business(),
      gallery: faker.commerce.gallery(),
      phoneNumber: faker.phone.phoneNumber(),
      countryCode: "+1",
      email: faker.internet.email(),
      hotelDescription: faker.lorem.paragraph(),
      starRating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
      reviewNumber: faker.datatype.number(1000),
      tags: [faker.lorem.word(), faker.lorem.word()],
      specialTags: "none",
      popularityNumber: faker.datatype.number(50),
      dateAdded: faker.date.recent(10),
      trendingNumber: faker.datatype.number(30),
      SN_Facebook: "https://www.facebook.com/" + companyName + "/",
      SN_Twitter: "https://twitter.com/" + companyName + "/",
      SN_Instagram: "https://instagram.com/" + companyName + "/",
      SN_Pinterest: "https://www.pinterest.com/" + companyName + "/",
      reviews:true,
      policies:true,
      rooms:true
    }

    hotels.push(hotel)
  }

  await prisma.hotels.createMany({
    data: hotels
  })

  console.log('Hotels seeded successfully');
}

export default seedHotel