import { useQuery } from "@tanstack/react-query"
import { getReviews } from "../services/reviews.services"

export const useGetReviews = ({ productId }: { productId: number }) => {
    return useQuery({
        queryKey: ["reviews", productId],
        queryFn: () => getReviews({ productId }),
    })
}