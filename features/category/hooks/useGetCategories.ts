"use client"
import { useQuery } from "@tanstack/react-query"
import { getCategories } from "../services/category.services"

export const useGetCategories = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
    })
    return { data, isLoading, isError, error }
}