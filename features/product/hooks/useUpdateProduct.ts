import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../services/products.services";

export const useUpdateProducts = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    })
}