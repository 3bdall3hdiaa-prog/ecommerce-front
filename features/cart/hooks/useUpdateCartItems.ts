import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartItems } from "../services/cart.services";

export const useUpdateCartItems = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: updateCartItems,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cartItems"],
            });
        },
        onError: (error: any) => {
            console.log(error.response?.data);
        }
    })
}