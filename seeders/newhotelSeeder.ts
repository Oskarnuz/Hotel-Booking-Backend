import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient()

const seedHotel = async (prisma: PrismaClient): Promise<void> => {

  const tags = await prisma.tags.findMany();
  const amenities = await prisma.amenities.findMany();
  const inclusions = await prisma.inclusions.findMany();


  for(let i = 0; i < 10; i++) {
    
    const randomTags = tags.sort(() => Math.random() - 0.5).slice(0, 3);
    const randomAmenities = amenities.sort(() => Math.random() - 0.5).slice(0, 3);
  const randomInclusions = inclusions.sort(() => Math.random() - 0.5).slice(0, 4);

    let companyName = faker.company.name();
    const hotel = await prisma.hotels.create({
      data: {
      HotelName: `${companyName} Hotel`,         
      Website: `http://www.${companyName
      .split(" ")
      .join("")
      .split(",")
      .join("")
      .split(".")
      .join("")
      .split("-")
      .join("")
      .toLowerCase()}.com`,             
      location: faker.address.streetAddress(),           
      category: "Category",           
      loc_Lat: faker.address.latitude(),           
      loc_Lng: faker.address.longitude(),           
      loc_Place: faker.address.streetAddress(),         
      loc_City: "Barcelona",          
      loc_State: "Cataluña",       
      loc_Country: "España",     
      FrontImg: `https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Hotels/hotel${
        Math.floor(Math.random() * 49) + 1
      }.jpeg`,             
      Gallery: `https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Hotels/hotel${
        Math.floor(Math.random() * 49) + 1
      }.jpeg-//-https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Hotels/hotel${
        Math.floor(Math.random() * 49) + 1
      }.jpeg-//-https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Hotels/hotel${
        Math.floor(Math.random() * 49) + 1
      }.jpeg-//-https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Hotels/hotel${
        Math.floor(Math.random() * 49) + 1
      }.jpeg`,           
      PhoneNumber: `${Math.floor(Math.random() * 300) + 500} ${
        Math.floor(Math.random() * 800) + 100
      } ${Math.floor(Math.random() * 800) + 100}`,         
      CountryCode: `+${Math.floor(Math.random() * 80) + 19}`,       
      Email: `${companyName
        .split(" ")
        .join("")
        .split(",")
        .join("")
        .split(".")
        .join("")
        .split("-")
        .join("")
        .toLowerCase()}@hotel.com`,             
      HotelDescription: faker.lorem.paragraph(5),
      StarRating: Math.floor(Math.random()* (5 - 2) + 2),         
      ReviewNumber: faker.datatype.number(10000),
      Tags: {
        connect: randomTags.map((tag) => ({ id: tag.id })),
      },             
      SpecialTags: `${
        Math.floor(Math.random() * 10) === 1
          ? "Certified"
          : Math.floor(Math.random() * 10) === 2
          ? "Recommended"
          : "NoTag"
      }`,          
      PopularityNumber: faker.datatype.number(100),
      DateAdded: faker.date.recent(1000),   
      TrendingNumber: faker.datatype.number(100),      
      SN_Facebook: `https://www.facebook.com/${companyName
      .split(" ")
      .join("")
      .split(",")
      .join("")
      .split(".")
      .join("")}/`,        
      SN_Twitter: `https://twitter.com/${companyName
      .split(" ")
      .join("")
      .split(",")
      .join("")
      .split(".")
      .join("")}/`,        
      SN_Instagram: `https://instagram.com/${companyName
      .split(" ")
      .join("")
      .split(",")
      .join("")
      .split(".")
      .join("")}/`,      
      SN_Pinterest: `https://www.pinterest.com/${companyName
      .split(" ")
      .join("")
      .split(",")
      .join("")
      .split(".")
      .join("")}/`,
      Reviews: {
        create: [
        {
          rating: Math.floor(Math.random()* (5 - 2) + 2),
          user: faker.internet.userName(),
          date: faker.date.past(1),
          hotelReview: faker.lorem.paragraphs(3)
        },
        {
          rating: Math.floor(Math.random()* (5 - 2) + 2),
          user: faker.internet.userName(),
          date: faker.date.past(1),
          hotelReview: faker.lorem.paragraphs(3)
        },
        {
          rating: Math.floor(Math.random()* (5 - 2) + 2),
          user: faker.internet.userName(),
          date: faker.date.past(1),
          hotelReview: faker.lorem.paragraphs(3)
        },
        {
          rating: Math.floor(Math.random()* (5 - 2) + 2),
          user: faker.internet.userName(),
          date: faker.date.past(1),
          hotelReview: faker.lorem.paragraphs(3)
        }
      ]   
    },
    Policies: {
      create: [
        {
          Name: "CheckIn 10:00 am"
        },
        {
          Name: "CheckOut 2:00 pm"
        }
      ]
    },
    Rooms: {
      create: [{
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
      {
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
    {
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
  {
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
}]
      
    }               
    }
  
  })
  }

  console.log('Hotel seeded successfully')
  
  }



export default seedHotel

