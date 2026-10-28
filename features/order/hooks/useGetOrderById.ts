import { useQuery } from "@tanstack/react-query"
import { getOrderById } from "../services/order.services"

export const useGetOrderById = ({ id, enabled }: { id: number; enabled: boolean }) => {
    return useQuery({
        queryKey: ['order', id],
        queryFn: () => getOrderById(id),
        enabled,
    })
}