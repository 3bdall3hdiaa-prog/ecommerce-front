import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createProducts } from "../services/products.services";
import { a } from "framer-motion/client";

export const useCreateProducts = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createProducts,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },


    })
}