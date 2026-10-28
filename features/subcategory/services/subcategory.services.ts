import axiosInstance from "@/lib/axios"
import { SubCategoryForm, SubCategoryResponse } from "../types/subcategory.types"

export const getSubCategories: () => Promise<{ data: SubCategoryResponse[], message: string, status: number }> = async () => {
    const res = await axiosInstance.get("/subcategory")
    if (res.status === 200) {
        return res.data
    }
}
export const createSubCategory = async (data: { newSubCategory: SubCategoryForm }) => {
    if (!data.newSubCategory) return
    console.log(data.newSubCategory)
    let formData = new FormData();
    formData.append("name", data.newSubCategory.name);
    formData.append("slug", data.newSubCategory.slug);
    if (data.newSubCategory.file) {
        formData.append("file", data.newSubCategory.file);
    } formData.append("categoryId", data.newSubCategory.categoryId.toString());

    const res = await axiosInstance.post("/subcategory", formData)
    if (res.status === 201) {
        return res.data
    }
}
export const updataSubCategory = async (data: { id: number, subCategory: SubCategoryResponse }) => {
    if (!data.id || !data) return
    const formData = new FormData();
    formData.append("name", data.subCategory.name);

    formData.append("slug", data.subCategory.slug);

    formData.append("categoryId", data.subCategory.categoryId.toString());
    if (data.subCategory.file) formData.append("file", data.subCategory.file);

    const res = await axiosInstance.patch(`/subcategory/${data.id}`, formData)
    if (res.status === 200) {
        return res.data
    }
}
export const deleteSubCategory = async (data: { id: number, }) => {
    if (!data.id) return
    const res = await axiosInstance.delete(`/subcategory/${data.id}`)
    if (res.status === 200) {
        return res.data
    }
}