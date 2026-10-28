import { useMutation, useQueryClient } from "@tanstack/react-query"
import { forgotPassword } from "../services/auth.service"


export const useForgetPassword = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: forgotPassword,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["forgot-password"] })
        },
    })
}