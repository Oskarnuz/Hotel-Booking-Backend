import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient()

const seedRoom = async (prisma: PrismaClient): Promise<void> => {
  const rooms_arr = []
  for(let i = 0; i < 4; i++) {
    const room = {
      Available: true,
      RoomImg: `https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Rooms/room${
      Math.floor(Math.random() * 114) + 1
          }.jpeg`,
      RoomName: faker.company.name(),
      OriginalPricePerNight: Math.floor(Math.random() * 1000) + 200,
      Discount: Math.floor(Math.random() * 20) + 10,
      About: faker.lorem.paragraph(),
      Facility: `Floors ${Math.floor(Math.random() * 60)} - ${Math.floor(Math.random() * 20) + 60}`,
      Amenities: "Amenities",
      Inclusions: "Inclusions"
    }

    rooms_arr.push(room)
  }

  await prisma.rooms.createMany({
    data: rooms_arr
  })

  console.log('Rooms seeded successfully');

}

export default seedRoom