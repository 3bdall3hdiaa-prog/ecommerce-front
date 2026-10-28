import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../services/products.services"

export const useGetProducts = ({ search }: { search?: string }) => {
    return useQuery({
        queryKey: ['products', search],
        queryFn: () => getProducts({ search }),
    })
}
