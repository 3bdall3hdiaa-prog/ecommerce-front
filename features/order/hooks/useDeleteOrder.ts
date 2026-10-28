import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrder } from "../services/order.services";

export const useDeleteOrder = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: deleteOrder,
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