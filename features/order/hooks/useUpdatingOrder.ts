import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrder } from "../services/order.services";

export const useUpdatingOrder = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: updateOrder,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["order"],
            });
        },
        onError: (error: any) => {
            console.log(error.response?.data);
        }
    })
}