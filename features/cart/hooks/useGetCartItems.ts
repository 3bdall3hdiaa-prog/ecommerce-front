import { useQuery } from "@tanstack/react-query"
import { getCartItems } from "../services/cart.services"

export const useGetCartItems = ({ userId }: { userId: number }) => {
    return useQuery({
        queryKey: ['cartItems', userId > 0 ? 'user' : 'guest'],
        queryFn: () => getCartItems({ userId }),
    })
}