import { useMutation, useQueryClient } from "@tanstack/react-query"
import { changePassword } from "../services/auth.service"

export const useChangePassword = () => {
    const queryclient = useQueryClient()
    return useMutation({
        mutationFn: changePassword,
        onSuccess: () => {
            queryclient.invalidateQueries({ queryKey: ["auth"] })
        }
    }
    )
}