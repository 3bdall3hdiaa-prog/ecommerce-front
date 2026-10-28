import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteSubCategory } from "../services/subcategory.services"

export const useDeleteSubCategory = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: deleteSubCategory,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['subcategories'] })
        },
    })
}