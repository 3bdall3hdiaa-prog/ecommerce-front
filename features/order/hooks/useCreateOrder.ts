import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../services/order.services";

export const useCreateOrder = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createOrder,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["order"],
            });
        },
        onError: (error: any) => {
            console.log(error.response?.data);
        }
    })
}