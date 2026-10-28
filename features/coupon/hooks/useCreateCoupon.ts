import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createCoupon } from "../services/coupon.services";

export const useCreateCoupon = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createCoupon,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["coupons"],
            });
        }, onError: (error: any) => {
            console.log(error.response?.data);
        }
    })
}