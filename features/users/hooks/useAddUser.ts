import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addUser } from "../services/user.services";

export const useAddUser = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: addUser,
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