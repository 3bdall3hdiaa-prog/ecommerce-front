import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../services/products.services";

export const useDeleteProducts = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    })
}