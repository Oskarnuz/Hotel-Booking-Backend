import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient()

const randomHotelImage = (): string => {
  const randomNumber = (Math.floor(Math.random() * 49) + 1).toString();
  return `https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Hotels/hotel${randomNumber}.jpeg`;
};



const seedHotel = async (prisma: PrismaClient): Promise<void> => {
  const hotels: any = []
  for(let i = 0; i < 3; i++) {
    let companyName = faker.company.companyName();
    
    const tagsArr = [
      "Swimming",
      "Parking",
      "Helicopter",
      "Bar",
      "breakfast",
      "Dinner",
    ];

    const randomTag= (): string =>{
      const randomNumber = Math.floor(Math.random() * tagsArr.length);
      return tagsArr[randomNumber]
      };

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

    const hotel = {
      name: `${companyName} Hotel`,
      website: `http://www.${companyName
      .split(" ")
      .join("")
      .split(",")
      .join("")
      .split(".")
      .join("")
      .split("-")
      .join("")
      .toLowerCase()}.com`,
      loc_Lat: (Math.random() * (70 - 14) + 14).toFixed(15) as string,
      loc_Lng: (Math.random() * (170 - -15) + -15).toFixed(15),
      loc_Place: faker.address.streetAddress(),
      loc_City: "Berlin",
      loc_State: "Mitte",
      loc_Country: "Germany",
      frontImg: randomHotelImage(),
      gallery: [
        randomHotelImage(),
        randomHotelImage(),
        randomHotelImage(),
        randomHotelImage()
      ],
      phoneNumber: `${Math.floor(Math.random() * 300) + 500} ${
        Math.floor(Math.random() * 800) + 100
      } ${Math.floor(Math.random() * 800) + 100}`,
      countryCode: `+${Math.floor(Math.random() * 80) + 19}`,
      email: `${companyName
        .split(" ")
        .join("")
        .split(",")
        .join("")
        .split(".")
        .join("")
        .split("-")
        .join("")
        .toLowerCase()}@hotel.com`,
      hotelDescription: faker.lorem.paragraph(5),
      starRating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
      reviewNumber: faker.datatype.number(10000),
      tags: [
        randomTag(),
        randomTag()
      ],
      specialTags: `${
        Math.floor(Math.random() * 10) === 1
          ? "Certified"
          : Math.floor(Math.random() * 10) === 2
          ? "Recommended"
          : "NoTag"
      }`,
      popularityNumber: faker.datatype.number(100),
      dateAdded: JSON.stringify(faker.date.recent(1000)).slice(1, 11),
      trendingNumber: faker.datatype.number(100),
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
      reviews:[
        {
          Rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
          User: faker.name.findName(),
          Date: JSON.stringify(faker.date.recent(1000)).slice(1, 11),
          HotelReview: faker.lorem.paragraph(),
        },
        {
          Rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
          User: faker.name.findName(),
          Date: JSON.stringify(faker.date.recent(1000)).slice(1, 11),
          HotelReview: faker.lorem.paragraph(),
        },
        {
          Rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
          User: faker.name.findName(),
          Date: JSON.stringify(faker.date.recent(1000)).slice(1, 11),
          HotelReview: faker.lorem.paragraph(),
        },
        {
          Rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
          User: faker.name.findName(),
          Date: JSON.stringify(faker.date.recent(1000)).slice(1, 11),
          HotelReview: faker.lorem.paragraph(),
        },
      ],
      policies: [
        `Check-in time: ${Math.floor(Math.random() * 12)}:00`,
        `Check-out time: ${Math.floor(Math.random() * 12) + 12}:00`,
        faker.lorem.paragraph(2),
      ],
      rooms: [
        {
          room_id: "1",
          RoomImg: `https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Rooms/room${
            Math.floor(Math.random() * 114) + 1
          }.jpeg`,
          RoomName: "Deluxe Room with Queen Bed",
          Amenities: [
            AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)],
            AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)],
            AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)],
            AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)],
          ],
          Inclusions: [
            InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)],
            InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)],
            InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)],
            InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)],
          ],
          OriginalPricePerNight: Math.floor(Math.random() * 1000) + 200,
          Discount: Math.floor(Math.random() * 20) + 10,
          About: [faker.lorem.paragraph()],
          Facility: [
            `Floors ${Math.floor(Math.random() * 60)} - ${
              Math.floor(Math.random() * 20) + 60
            }`,
            faker.lorem.paragraph(3)
          ]
        },
        {
          room_id: "2",
          RoomImg: `https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Rooms/room${
            Math.floor(Math.random() * 114) + 1
          }.jpeg`,
          RoomName: "Deluxe Accessible",
          Amenities: [
            AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)],
            AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)],
            AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)],
            AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)],
          ],
          Inclusions: [
            InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)],
            InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)],
            InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)],
            InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)],
          ],
          OriginalPricePerNight: Math.floor(Math.random() * 1000) + 200,
          Discount: Math.floor(Math.random() * 20) + 10,
          About: [faker.lorem.paragraph()],
          Facility: [
            `Floors ${Math.floor(Math.random() * 60)} - ${
              Math.floor(Math.random() * 20) + 60
            }`,
            faker.lorem.paragraph(3)
          ]
        },
        {
          room_id: "3",
          RoomImg: `https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Rooms/room${
            Math.floor(Math.random() * 114) + 1
          }.jpeg`,
          RoomName: "Deluxe Room with King Bed",
          Amenities: [
            AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)],
            AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)],
            AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)],
            AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)],
          ],
          Inclusions: [
            InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)],
            InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)],
            InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)],
            InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)],
          ],
          OriginalPricePerNight: Math.floor(Math.random() * 1000) + 200,
          Discount: Math.floor(Math.random() * 20) + 10,
          About: [faker.lorem.paragraph()],
          Facility: [
            `Floors ${Math.floor(Math.random() * 60)} - ${
              Math.floor(Math.random() * 20) + 60
            }`,
            faker.lorem.paragraph(3)
          ]
        },
        {
          room_id: "4",
          RoomImg: `https://raw.githubusercontent.com/RandomBlueGuy/PROYECTO-FINAL-MIR/main/src/DataBase/Hotel/Rooms/room${
            Math.floor(Math.random() * 114) + 1
          }.jpeg`,
          RoomName: "King Suite",
          Amenities: [
            AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)],
            AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)],
            AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)],
            AmenitiesArr[Math.floor(Math.random() * AmenitiesArr.length)],
          ],
          Inclusions: [
            InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)],
            InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)],
            InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)],
            InclusionsArr[Math.floor(Math.random() * InclusionsArr.length)],
          ],
          OriginalPricePerNight: Math.floor(Math.random() * 1000) + 200,
          Discount: Math.floor(Math.random() * 20) + 10,
          About: [faker.lorem.paragraph()],
          Facility: [
            `Floors ${Math.floor(Math.random() * 60)} - ${
              Math.floor(Math.random() * 20) + 60
            }`,
            faker.lorem.paragraph(3)
          ]
        }
      ]
    }

    hotels.push(hotel)
  }
  console.log("XXXXXX", hotels);
  await prisma.hotel.createMany({
    data: hotels
  })

  console.log('Hotels seeded successfully');
}



export default seedHotel