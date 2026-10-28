
import { CategoryForm, CategoryResponse } from "../types/category.types"
import axiosInstance from "@/lib/axios"

export const createCategory: (data: { newCategory: CategoryForm }) => Promise<{ data: CategoryResponse, message: string, status: number }> = async (data: { newCategory: CategoryForm }) => {
    let formData = new FormData();
    formData.append("name", data.newCategory.name);
    formData.append("slug", data.newCategory.slug);
    if (data.newCategory.file) formData.append("file", data.newCategory.file);
    formData.append("icon", data.newCategory.icon);
    if (!data.newCategory) return
    const res = await axiosInstance.post("/category", formData)
    if (res.status === 201) {
        return res.data
    }
}

export const getCategories: () => Promise<{ data: CategoryResponse[], message: string, status: number }> = async () => {
    const res = await axiosInstance.get("/category")
    if (res.status === 200) {
        return res.data
    }
}
export const deleteCategory: (data: { id: number }) => Promise<{ message: string, status: number }> = async (data: { id: number }) => {
    if (!data.id) {
        alert("Category ID is required")
        return
    }
    const res = await axiosInstance.delete(`/category/${data.id}`)
    if (res.status === 200) {
        return res.data
    }
}
export const updateCategory: (data: { category: CategoryResponse }) => Promise<{ data: CategoryResponse, message: string, status: number }> = async (data: { category: CategoryResponse }) => {
    if (!data.category.id || !data) return
    const res = await axiosInstance.patch(`/category/${data.category.id}`, data.category)
    console.log(res)
    if (res.status === 200) {
        return res.data
    }

}