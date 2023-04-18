import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient()

const seedRoom = async (prisma: PrismaClient): Promise<void> => {
  const rooms_arr = []
  
  const totalItAmen = await prisma.amenities.count();
  const totalItInclu = await prisma.inclusions.count();
  
  
  
  for(let i = 0; i < 4; i++) {

    const indexArrAmen = [];
    const indexArrInclu = [];

    for (let i = 0; i < 4; i++) {
      indexArrAmen.push(Math.floor(Math.random() * totalItAmen));
      indexArrInclu.push(Math.floor(Math.random() * totalItInclu));
    }
    
    const amenitiesData = await prisma.amenities.findMany({
      where: {
        OR: Array.from(indexArrAmen).map((index) => ({ id: index })),
      },
    });
    console.log("Revisar", amenitiesData)
    const inclusionsData = await prisma.inclusions.findMany({
      where: {
        OR: Array.from(indexArrInclu).map((index) => ({ id: index })),
      },
    });


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
      Amenities: {
        create: {
          connect: amenitiesData.map((amenity) => {
            id: amenity.id
          })
        }
      },
      Inclusions: {
        create: {
        connect: inclusionsData.map((inclusion) => {
            id: inclusion.id
        })
      }
      },
    
  }
  console.log( "Imprimir ", room)
    rooms_arr.push(room)
  }

  await prisma.rooms.createMany({
    data: rooms_arr
  })

  console.log('Rooms seeded successfully');

}

export default seedRoom