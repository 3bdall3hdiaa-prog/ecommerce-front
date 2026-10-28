import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createSubCategory } from "../services/subcategory.services";

export const useCreateSubCategory = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createSubCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["subcategories"],
            });
        },
        onError: (error: any) => {
            console.log(error.response?.data);
        }

    })
}