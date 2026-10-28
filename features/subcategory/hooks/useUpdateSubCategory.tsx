import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updataSubCategory } from "../services/subcategory.services";


export const useUpdataSubCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updataSubCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["subcategories"],
            });
        },

    })
}