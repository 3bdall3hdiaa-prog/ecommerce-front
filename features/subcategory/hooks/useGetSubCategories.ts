import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSubCategories } from "../services/subcategory.services";

export const useGetSubCategories = () => {
    return useQuery({
        queryKey: ['subcategories'],
        queryFn: getSubCategories

    })
}