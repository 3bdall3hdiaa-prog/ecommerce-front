"use client"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { verifyOtp } from "@/features/auth/services/auth.service";

export const useVerifyOtp = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: verifyOtp,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["verifyOtp"],
            });
        },
        onError: (error: any) => {
            console.log(error.response?.data);
        }
    });
};