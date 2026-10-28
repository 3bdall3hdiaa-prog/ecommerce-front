import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../services/auth.service";

export const useLogin = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: login,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["login"],
            });
        },
        onError: (error: any) => {
            alert(error.response?.data.message || error.message);
        }
    });
}