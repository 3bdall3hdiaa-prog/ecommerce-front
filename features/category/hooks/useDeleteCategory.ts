import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCategory } from "../services/category.services"

export const useDeleteCategory = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['categories'] })
        }, onError: (error: any) => {
            console.log(error.response?.data);
        }
    })
    return mutation
}