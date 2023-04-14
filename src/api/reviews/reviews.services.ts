import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const getAllReviews = () => {
  return prisma.reviews.findMany({
    select: {
      id: true,
      rating: true,
      user: true,
      date: true,
      hotelReview: true
    }
  })
}

export const getReviewById = (id: string) => {
  return prisma.reviews.findUnique({
    where: {
      id: id,
    },
  });
}

export const createReview = (input: any) => {
  return prisma.reviews.create({
    data: {
      rating: Math.floor(input.rating),
      user: input.user,
      date: input.date,
      hotelReview: input.hotelReview,
      }
    }
  )
}

export const updateReview = (id: string, input: any) => {
  return prisma.reviews.update({
    where: {
      id: id,
    },
    data: {
      rating: input.rating,
      user: input.user,
      date: input.date,
      hotelReview: input.hotelReview
    },
  });
}

export const deleteReview = (id: string) => {
  return prisma.reviews.delete({
    where: {
      id: id,
    },
  });
}