import { useQuery } from "@tanstack/react-query"
import { getOrders } from "../services/order.services"

export const useGetOrders = (id: number | null) => {
    return useQuery({
        queryFn: () => getOrders(id),
        queryKey: ['order', id ? id : null]
    })
}