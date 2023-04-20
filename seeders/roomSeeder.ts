import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const seedRooms = async (prisma: PrismaClient): Promise<void> => {
const amenities = await prisma.amenities.findMany();
const inclusions = await prisma.inclusions.findMany();

for (let i = 0; i < 200; i++) {
  const randomAmenities = amenities.sort(() => Math.random() - 0.5).slice(0, 3);
  const randomInclusions = inclusions.sort(() => Math.random() - 0.5).slice(0, 4);

  const room = await prisma.rooms.create({
    data: {
      Available: true,
      RoomImg: `https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Rooms/room${Math.floor(Math.random() * 114) + 1}.jpeg`,
      RoomName: `Room Suite ${faker.company.name().split(" ").join("").split(",").join("").split(".").join("").split("-").join("").toLowerCase()}`,
      OriginalPricePerNight: Math.floor(Math.random() * 80) + 5,
      Discount: Math.floor(Math.random() * 10) + 3,
      About: faker.lorem.paragraph(),
      Facility: `Floors ${Math.floor(Math.random() * 60)} - ${Math.floor(Math.random() * 20) + 60}`,
      Amenities: {
        connect: randomAmenities.map((amenity) => ({ id: amenity.id })),
      },
      Inclusions: {
        connect: randomInclusions.map((inclusion) => ({ id: inclusion.id })),
      },
    },
  });

}

console.log('All rooms seeded successfully');
}


export default seedRooms;