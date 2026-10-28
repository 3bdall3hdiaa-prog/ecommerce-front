import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateUser } from "../services/user.services"

export const useUpdateUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: updateUser,
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