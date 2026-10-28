import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createSubSubCategory } from "../services/subsubcategory.services"

export const useCreateSubSubCategory = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createSubSubCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["subsubcategories"],
            });
        },
        onError: (error: any) => {
            console.log(error.response?.data);
        }
    })
}