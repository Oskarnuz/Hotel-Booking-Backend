import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient()

const seedHotel = async (prisma: PrismaClient): Promise<void> => {
  const hotel_arr = []
  for(let i = 0; i < 10; i++) {
    let companyName = faker.company.name();
    const hotel = {
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
      .join("")}/`                  
    }

    hotel_arr.push(hotel)
  }

  await prisma.hotels.createMany({
    data: hotel_arr
  })

  console.log('Hotel seeded successfully')
}

export default seedHotel

