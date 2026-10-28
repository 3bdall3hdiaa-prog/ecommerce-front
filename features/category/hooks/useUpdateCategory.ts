import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateCategory } from "../services/category.services"

export const useUpdateCategory = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: updateCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] })
        }, onError: (error: any) => {
            console.log(error.response?.data);
        }
    })
    return mutation
}
