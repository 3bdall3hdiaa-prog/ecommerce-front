"use client"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register } from "@/features/auth/services/auth.service";

export const useRegister = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: register,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["register"],
            });
        },
        onError: (error: any) => {
            console.log(error.response?.data);
        }
    });
};