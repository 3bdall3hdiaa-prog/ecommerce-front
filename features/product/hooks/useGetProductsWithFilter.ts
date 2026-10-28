import { useQuery } from "@tanstack/react-query"
import { getProductsWithFilter } from "../services/products.services"

export const useGetProductsWithFilter = (query: any) => {
    return useQuery({
        queryKey: ['products', query],
        queryFn: () => getProductsWithFilter(query),
    })
}