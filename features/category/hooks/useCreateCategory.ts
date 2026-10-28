"use client"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory } from "../services/category.services";

export const useCreateCategory = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["categories"],
            });
        }, onError: (error: any) => {
            console.log(error.response?.data);
        }
    })
}