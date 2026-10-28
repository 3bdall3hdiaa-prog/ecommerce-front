import { useQuery } from "@tanstack/react-query"
import { getCoupons } from "../services/coupon.services"

export const useGetCoupons = () => {
    return useQuery({
        queryKey: ['coupons'],
        queryFn: getCoupons
    })
}