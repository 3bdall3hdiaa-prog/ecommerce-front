import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updataCoupon } from "../services/coupon.services";

export const useUpdateCoupon = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updataCoupon,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["coupons"],
            });
        }, onError: (error: any) => {
            console.log(error.response?.data);
        }
    })
}