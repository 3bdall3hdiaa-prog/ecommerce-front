import { useQuery } from "@tanstack/react-query"
import { getSubSubCategories } from "../services/subsubcategory.services"

export const useGetSubSubCategories = () => {
    return useQuery({
        queryKey: ['subsubcategories'],
        queryFn: getSubSubCategories,
    })
}