"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHotels = exports.updateHotels = exports.createHotel = exports.getHotelById = exports.getAllHotels = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllHotels = () => {
    return prisma.hotels.findMany({
        select: {
            id: true,
            HotelName: true,
            Website: true,
            location: true,
            category: true,
            loc_Lat: true,
            loc_Lng: true,
            loc_Place: true,
            loc_City: true,
            loc_State: true,
            loc_Country: true,
            FrontImg: true,
            Gallery: true,
            PhoneNumber: true,
            CountryCode: true,
            Email: true,
            HotelDescription: true,
            StarRating: true,
            ReviewNumber: true,
            Tags: true,
            SpecialTags: true,
            PopularityNumber: true,
            DateAdded: true,
            TrendingNumber: true,
            SN_Facebook: true,
            SN_Twitter: true,
            SN_Instagram: true,
            SN_Pinterest: true,
            Rooms: true,
        },
    });
};
exports.getAllHotels = getAllHotels;
const getHotelById = (id) => {
    return prisma.hotels.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            HotelName: true,
            Website: true,
            location: true,
            category: true,
            loc_Lat: true,
            loc_Lng: true,
            loc_Place: true,
            loc_City: true,
            loc_State: true,
            loc_Country: true,
            FrontImg: true,
            Gallery: true,
            PhoneNumber: true,
            CountryCode: true,
            Email: true,
            HotelDescription: true,
            StarRating: true,
            ReviewNumber: true,
            Tags: true,
            SpecialTags: true,
            PopularityNumber: true,
            DateAdded: true,
            TrendingNumber: true,
            SN_Facebook: true,
            SN_Twitter: true,
            SN_Instagram: true,
            SN_Pinterest: true,
            Rooms: true,
        },
    });
};
exports.getHotelById = getHotelById;
const createHotel = (input) => {
    return prisma.hotels.create({
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
            FrontImg: input.FrontImg,
            Gallery: input.Gallery,
            PhoneNumber: input.PhoneNumber,
            CountryCode: input.CountryCode,
            Email: input.Email,
            HotelDescription: input.HotelDescription,
            StarRating: input.StarRating,
            ReviewNumber: input.ReviewNumber,
            Tags: input.Tags,
            SpecialTags: input.SpecialTags,
            PopularityNumber: input.PopularityNumber,
            DateAdded: input.DateAdded,
            TrendingNumber: input.TrendingNumber,
            SN_Facebook: input.SN_Facebook,
            SN_Twitter: input.SN_Twitter,
            SN_Instagram: input.SN_Instagram,
            SN_Pinterest: input.SN_Pinterest,
            Rooms: input.Rooms,
        },
    });
};
exports.createHotel = createHotel;
const updateHotels = (id, input) => {
    return prisma.hotels.update({
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
            FrontImg: input.FrontImg,
            Gallery: input.Gallery,
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
        },
    });
};
exports.updateHotels = updateHotels;
function deleteHotels(id) {
    return prisma.hotels.delete({
        where: {
            id: id,
        },
    });
}
exports.deleteHotels = deleteHotels;
