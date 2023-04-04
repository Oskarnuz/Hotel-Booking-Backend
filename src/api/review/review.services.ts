import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const getAllReviews = () => {
  return prisma.review.findMany({
    select: {
      id: true,
      user: true,
      date: true,
      hotelReview: true
    }
  })
}

export const getReviewById = (id: string) => {
  return prisma.review.findUnique({
    where: {
      id: id,
    },
  });
}

export const createReview = (input: any) => {
  return prisma.review.create({
    data: {
      rating: parseInt(input.rating),
      user: input.user,
      date: input.date,
      hotelReview: input.hotelReview,
        connect:{
          id: input.productId
        }
      }
    }
  })
}

export const updateReview = (id: string, review: any) => {
  return prisma.review.update({
    where: {
      id: id,
    },
    data: {
      text: review.text,
      rating: parseInt(review.rating),
    },
  });
}

export const deleteReview = (id: string) => {
  return prisma.review.delete({
    where: {
      id: id,
    },
  });
}