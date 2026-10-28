import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteUser, updateUser } from "../services/user.services"

export const useDeleteUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["users"],
            });
        },
        onError: (error: any) => {
            console.log(error.response?.data);
        }
    })
}