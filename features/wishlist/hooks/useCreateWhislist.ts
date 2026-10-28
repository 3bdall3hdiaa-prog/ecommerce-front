import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createWishList } from "../services/wishlist.services";

export const useCreateWhislist = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createWishList,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["whislist"],
            });
        },
        onError: (error: any) => {
            console.log(error.response?.data);
        }
    });
};