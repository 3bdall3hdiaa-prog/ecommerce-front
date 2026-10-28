import { useQuery } from "@tanstack/react-query"
import { getAllReviews, getReviews } from "../services/reviews.services"

export const useGetAllReviews = () => {
    return useQuery({
        queryKey: ["allReviews"],
        queryFn: getAllReviews,
    })
}