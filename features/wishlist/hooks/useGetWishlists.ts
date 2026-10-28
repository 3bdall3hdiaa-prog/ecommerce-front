import { useQuery } from "@tanstack/react-query"
import { getWishlist } from "../services/wishlist.services"

export const useGetWishlist = () => {
    return useQuery({
        queryKey: ["wishlist"],
        queryFn: getWishlist,
    })
}