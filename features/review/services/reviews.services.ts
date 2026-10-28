import axiosInstance from "@/lib/axios"
import { ReviewForm } from "../types/reviews.types"

export const createReviews = async (data: ReviewForm) => {
    const res = await axiosInstance.post("/review", data)
    return res.data
}
export const getReviews = async ({ productId }: { productId: number }) => {
    const res = await axiosInstance.get(`/review/${productId}`)
    return res.data
}
export const getAllReviews = async () => {
    const res = await axiosInstance.get("/review")
    return res.data
}
export const deleteReview = async ({ id }: { id: number }) => {
    const res = await axiosInstance.delete(`/review/${id}`)
    return res.data
}