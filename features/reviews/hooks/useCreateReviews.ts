import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createReviews } from "../services/reviews.services";
export const useCreateReviews = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createReviews,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["reviews"],
            });
        },
        onError: (error: any) => {
            console.log(error.response?.data);
        }
    })
}