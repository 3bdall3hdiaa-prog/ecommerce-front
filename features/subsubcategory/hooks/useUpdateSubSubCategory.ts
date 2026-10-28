import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSubSubCategory } from "../services/subsubcategory.services";

export const useUpdateSubSubCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateSubSubCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["subsubcategories"],
            });
        },
        onError: (error: any) => {
            console.log(error.response?.data);
        }

    });
};