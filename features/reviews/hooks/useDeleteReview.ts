import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteReview } from "../services/reviews.services"

export const useDeleteReview = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteReview,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['allReviews'] })
        }, onError: (error: any) => {
            console.log(error.response?.data);
        }
    })
}