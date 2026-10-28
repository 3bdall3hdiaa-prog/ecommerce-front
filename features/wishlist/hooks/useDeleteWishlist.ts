import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteWishlist } from "../services/wishlist.services"

export const useDeleteWishlist = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: deleteWishlist,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['whislist'] })
        },

    })
}