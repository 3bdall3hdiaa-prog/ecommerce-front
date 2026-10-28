import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteSubSubCategory } from "../services/subsubcategory.services"

export const useDeleteSubSubCategory = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: deleteSubSubCategory,
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