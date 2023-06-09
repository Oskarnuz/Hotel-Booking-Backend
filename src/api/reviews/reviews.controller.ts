import { Request, Response, NextFunction } from "express";
import { 
  createReview,
  getAllReviews,
  deleteReview,
  getReviewById,
  updateReview,
} from "./reviews.services";

export const getAllReviewsController = async (
  req: Request,
  res: Response,
) => {
  try {
    const review = await getAllReviews()

    res.status(200).json({ message: 'Reviews found', data: review })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getReviewByIdController = async(
  req: Request, 
  res: Response
) => {
  try {
    const { id } = req.params;
    const review = await getReviewById(Number(id));
    res.status(200).json({ message: 'Review found', data: review })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createReviewController = async (
  req: Request,
  res: Response,
) => {
  try {    
    const review = await createReview(req.body)

    res.status(201).json({ message: 'Review created', data: review })
  } catch(error: any) {
    res.status(500).json({ message: error.message })

  }
}

export const updateReviewController = async (
  req: Request, 
  res: Response
) => {
  try {
    const { id } = req.params;
    const review = await updateReview(Number(id), req.body);
    res.status(200).json({ message: 'Review updated', data: review })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteReviewController = async (
  req: Request, 
  res: Response
) => {
  try {
    const { id } = req.params;
    const review = await deleteReview(Number(id));
    res.status(200).json({ message: 'Review deleted', data: review })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}