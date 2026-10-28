import { useQuery } from "@tanstack/react-query"
import { getSingleProduct } from "../services/products.services"

export const useGetSingleProduct = ({ id }: { id: number }) => {
    return useQuery({
        queryKey: ['singleProduct', id],
        queryFn: () => getSingleProduct(id),
    })
}