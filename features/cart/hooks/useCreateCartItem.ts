import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCartItem } from "../services/cart.services";

export const useCreateCartItem = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createCartItem,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cartItems"],
            });
        },
        onError: (error: any) => {
            console.log(error.response?.data || error.response?.data.message);
        }
    })
}