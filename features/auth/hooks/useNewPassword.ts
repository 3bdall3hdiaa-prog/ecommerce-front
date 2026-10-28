import { useMutation, useQueryClient } from "@tanstack/react-query"
import { newPassword } from "../services/auth.service"

export const useNewPassword = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: newPassword,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["auth"] })
        }
    })
}