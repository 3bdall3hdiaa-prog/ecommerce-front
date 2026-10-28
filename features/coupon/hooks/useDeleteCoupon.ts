import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCoupon } from "../services/coupon.services";

export const useDeleteCoupon = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteCoupon,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["coupons"],
            });
        }, onError: (error: any) => {
            console.log(error.response?.data);
        }
    })
}