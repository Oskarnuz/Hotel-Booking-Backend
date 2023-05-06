import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// CRUD
export const getAllUsers = () => {
  return prisma.users.findMany({
    select: {
      id: true,
      fullName: true,
      gender: true,
      streetAddress: true,
      city: true,
      state: true,
      zipCode: true,
      email: true,
      phoneNumber: true,
      password: true,
      bookings: true,
      role: true,
      picture: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

// Create

export const createUser = (input: any) => {
  const roleId = 1;
  return prisma.users.create({
    data: {
      fullName: input.fullName,
      gender: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      email: input.email,
      phoneNumber: "",
      password: input.password,
      bookings: input.bookings,
      role: {
        connect: { id: roleId },
      },
      picture: "",
    },
  });
};

export const getUserById = (id: string) => {
  return prisma.users.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      fullName: true,
      gender: true,
      streetAddress: true,
      city: true,
      state: true,
      zipCode: true,
      email: true,
      phoneNumber: true,
      password: true,
      bookings: {
        select: {
          id: true,
          HotelName: true,
          RoomType: true,
          CheckInDate: true,
          CheckOutDate: true,
          SpecialReqs: true,
          HotelCity: true,
          HotelCountry: true,
          NumberOfGuest: true,
          payments: true,
          Owner: true,
          createdAt: true,
        },
      },
      role: true,
      picture: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const updateUser = (id: string, input: any) => {
  return prisma.users.update({
    where: {
      id: id,
    },
    data: {
      fullName: input.fullName,
      gender: input.gender,
      streetAddress: input.streetAddress,
      city: input.city,
      state: input.state,
      zipCode: input.zipCode,
      phoneNumber: input.phoneNumber,
      bookings: input.bookings,
    },
  });
};

export const updateUserPassword = (id: string, input: any) => {
  return prisma.users.update({
    where: {
      id: id,
    },
    data: {
      password: input.password,
    },
  });
};

export const updateUserRole = (id: string, input: any) => {
  return prisma.users.update({
    where: {
      id: id,
    },
    data: {
      roleId: input.newRrole,
      role: {
        connect: { id: input.newRole },
      },
    },
  });
};

export const updateUserPicture = (id: string, input: any) => {
  return prisma.users.update({
    where: {
      id: id,
    },
    data: {
      picture: input.picture,
    },
  });
};

export const recoverPassword = (email: string) => {
  return prisma.users.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
      password: true,
    },
  });
};


export const deleteUser = (id: string) => {
  return prisma.users.delete({
    where: {
      id,
    },
  });
};
