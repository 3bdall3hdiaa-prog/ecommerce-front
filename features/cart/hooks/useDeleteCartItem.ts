import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCartItem } from "../services/cart.services"

export const useDeleteCartItem = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: deleteCartItem,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cartItems"],
            })
        }
    })
}