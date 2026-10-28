import { useQuery } from "@tanstack/react-query"
import { getOrder } from "../services/order.services"

export const useGetOrder = () => {
    return useQuery({
        queryFn: getOrder,
        queryKey: ['ordersUser']
    })
}