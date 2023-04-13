import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// Get
export const getAllHotels = () => {
  return prisma.hotel.findMany({
    select: {
      id:true,
      HotelName:true,
      Website:true,
      location:true,
      category:true,
      loc_Lat:true,
      loc_Lng:true,
      loc_Place:true,
      loc_City:true,
      loc_State:true,
      loc_Country:true,
      FrontImg:true,
      Gallery:true,
      PhoneNumber:true,
      CountryCode:true,
      Email:true,
      HotelDescription:true,
      StarRating:true,
      ReviewNumber:true,
      Tags:true,
      SpecialTags:true,
      PopularityNumber:true,
      DateAdded:true,
      TrendingNumber:true,
      SN_Facebook:true,
      SN_Twitter:true,
      SN_Instagram:true,
      SN_Pinterest:true,
      Reviews:true,
      Policies:true,
      Rooms:true
    }
  })
}

export const getHotelById = (id: string) => {
  return prisma.hotel.findUnique({
    where: {
      id: id
    },
    select: {
      id:true,
      HotelName:true,
      Website:true,
      location:true,
      category:true,
      loc_Lat:true,
      loc_Lng:true,
      loc_Place:true,
      loc_City:true,
      loc_State:true,
      loc_Country:true,
      FrontImg:true,
      Gallery:true,
      PhoneNumber:true,
      CountryCode:true,
      Email:true,
      HotelDescription:true,
      StarRating:true,
      ReviewNumber:true,
      Tags:true,
      SpecialTags:true,
      PopularityNumber:true,
      DateAdded:true,
      TrendingNumber:true,
      SN_Facebook:true,
      SN_Twitter:true,
      SN_Instagram:true,
      SN_Pinterest:true,
      Reviews:true,
      Policies:true,
      Rooms:true
    }
  })
}

//Post for administrator
export const createHotel = (input: any) => {
  return prisma.hotel.create({
    data: {
      HotelName: input.HotelName,
      Website: input.Website,
      location: input.location,
      category: input.category,
      loc_Lat: input.loc_Lat,
      loc_Lng: input.loc_Lng,
      loc_Place: input.loc_Place,
      loc_City: input.loc_City,
      loc_State: input.loc_State,
      loc_Country: input.loc_Country,
      FrontImg: input.FrontImg, //Image
      Gallery: input.Gallery, // Images
      PhoneNumber: input.PhoneNumber,
      CountryCode: input.CountryCode as string,
      Email: input.Email,
      HotelDescription: input.HotelDescription,
      Tags: input.Tags,
      SpecialTags: input.SpecialTags,
      PopularityNumber: input.PopularityNumber,
      DateAdded: input.DateAdded,
      SN_Facebook: input.SN_Facebook,
      SN_Twitter: input.SN_Twitter,
      SN_Instagram: input.SN_Instagram,
      SN_Pinterest: input.SN_Pinterest,
      Policies: input.Policies,
      Rooms: input.Rooms
    }
  })
}

// Update for administrator
export const updateHotels = (id: string, input: any) => {
  return prisma.hotel.update({
    where: {
      id: id,
    },
    data: {
      HotelName: input.HotelName,
      Website: input.Website,
      location: input.location,
      category: input.category,
      loc_Lat: input.loc_Lat,
      loc_Lng: input.loc_Lng,
      loc_Place: input.loc_Place,
      loc_City: input.loc_City,
      loc_State: input.loc_State,
      loc_Country: input.loc_Country,
      FrontImg: input.FrontImg, //Image
      Gallery: input.Gallery, // Images
      PhoneNumber: input.PhoneNumber,
      CountryCode: input.CountryCode,
      Email: input.Email,
      HotelDescription: input.HotelDescription,
      Tags: input.Tags,
      SpecialTags: input.SpecialTags,
      PopularityNumber: input.PopularityNumber,
      DateAdded: input.DateAdded,
      SN_Facebook: input.SN_Facebook,
      SN_Twitter: input.SN_Twitter,
      SN_Instagram: input.SN_Instagram,
      SN_Pinterest: input.SN_Pinterest,
      Policies: input.Policies,
      Rooms: input.Rooms
    }
  })
}

//Delete for administrator
export function deleteHotels(id: string) {
  return prisma.hotel.delete({
    where: {
      id: id,
    },
  });
}