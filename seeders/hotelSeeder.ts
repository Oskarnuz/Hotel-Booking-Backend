import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

const seedHotel = async (prisma: PrismaClient): Promise<void> => {
  const tags = await prisma.tags.findMany();
  const amenities = await prisma.amenities.findMany();
  const inclusions = await prisma.inclusions.findMany();

  const tagsArr = [
    "Swimming",
    "Parking",
    "Helicopter",
    "Bar",
    "breakfast",
    "Dinner",
  ];

  const AmenitiesArr = [
    "Monogrammed Linens",
    "Pampered Pet",
    "Rollaway Tent",
    "Relaxation Devices",
    "Queen",
    "Shower",
    "LCD TV",
    "Couch",
    "Sofa",
    "Pool",
    "Minibar",
    "Cable",
    "Shampoo",
    "Coffee kit",
    "Helicopter",
    "Sleepers",
    "Bathrobes",
    "Gym",
    "Fitness Center",
    "VIP shopping",
    "Shower Fridge",
  ];

  const InclusionsArr = [
    "Outdoor Equipment",
    "Arcade Games",
    "Fresh Bread",
    "Kid Equipment",
    "Room Purification",
    "Hobbyist Tech",
    "Premium coffee",
    "Bathrobes and slippers",
    "Tissue box",
    "Toiletries",
    "Wi-Fi",
    "Breakfast",
    "Non Refundable",
    "Vodka",
    "Free Drinks",
    "towels not included",
    "FurSuit",
  ];

  for (let i = 0; i < 25; i++) {
    const randomTags = `${
      tagsArr[Math.floor(Math.random() * tagsArr.length)]
    }-/-${tagsArr[Math.floor(Math.random() * tagsArr.length)]}`;

    const randomAmenities = `${
      AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)]
    }-/-${AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)]}-/-${
      AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)]
    }-/-${AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)]}`;

    const randomInclusions = `${
      InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)]
    }-/-${InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)]}-/-${
      InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)]
    }-/-${InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)]}`;

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
        loc_City: "Detroit",
        loc_State: "---",
        loc_Country: "United States",
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
        StarRating: Math.floor(Math.random() * (5 - 2) + 2),
        ReviewNumber: faker.datatype.number(10000),
        Tags: randomTags,
        SpecialTags: `${
          Math.floor(Math.random() * 10) === 9
            ? "Certified"
            : Math.floor(Math.random() * 10) === 8
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
        Rooms: {
          create: [
            {
              Available: true,
              RoomImg: `https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Rooms/room${
                Math.floor(Math.random() * 114) + 1
              }.jpeg`,
              RoomName: "Ultra deluxe Room",
              OriginalPricePerNight: Math.floor(Math.random() * 500) + 100,
              Discount: Math.floor(Math.random() * 30) + 1,
              About: faker.lorem.paragraph(),
              Facility: `Floors ${Math.floor(Math.random() * 60)} - ${
                Math.floor(Math.random() * 20) + 60
              }`,
              Amenities: randomAmenities,
              Inclusions: randomInclusions,
            },
            {
              Available: true,
              RoomImg: `https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Rooms/room${
                Math.floor(Math.random() * 114) + 1
              }.jpeg`,
              RoomName: "Deluxe Room",
              OriginalPricePerNight: Math.floor(Math.random() * 80) + 5,
              Discount: Math.floor(Math.random() * 10) + 3,
              About: faker.lorem.paragraph(),
              Facility: `Floors ${Math.floor(Math.random() * 60)} - ${
                Math.floor(Math.random() * 20) + 60
              }`,
              Amenities: randomAmenities,
              Inclusions: randomInclusions,
            },
            {
              Available: true,
              RoomImg: `https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Rooms/room${
                Math.floor(Math.random() * 114) + 1
              }.jpeg`,
              RoomName: "Medium Deluxe Room",
              OriginalPricePerNight: Math.floor(Math.random() * 80) + 5,
              Discount: Math.floor(Math.random() * 10) + 3,
              About: faker.lorem.paragraph(),
              Facility: `Floors ${Math.floor(Math.random() * 60)} - ${
                Math.floor(Math.random() * 20) + 60
              }`,
              Amenities: randomAmenities,
              Inclusions: randomInclusions,
            },
            {
              Available: true,
              RoomImg: `https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Rooms/room${
                Math.floor(Math.random() * 114) + 1
              }.jpeg`,
              RoomName: "Economy Class Room",
              OriginalPricePerNight: Math.floor(Math.random() * 80) + 5,
              Discount: Math.floor(Math.random() * 10) + 3,
              About: faker.lorem.paragraph(),
              Facility: `Floors ${Math.floor(Math.random() * 60)} - ${
                Math.floor(Math.random() * 20) + 60
              }`,
              Amenities: randomAmenities,
              Inclusions: randomInclusions,
            },
          ],
        },
      },
    });
  }
};
export default seedHotel;
