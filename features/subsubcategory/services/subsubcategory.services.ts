import axiosInstance from "@/lib/axios";
import { SubsubcategoryForm, SubsubcategoryResponse, updateSubsubcategoryForm } from "../types/subsubcategory";

export const getSubSubCategories: () => Promise<{ data: SubsubcategoryResponse[], message: string, status: number }> = async () => {
    const res = await axiosInstance.get("/subsubcategory")
    return res.data


}
export const createSubSubCategory: (data: { newSubSubCategory: SubsubcategoryForm }) => Promise<{ message: string, status: number, data: SubsubcategoryResponse }> = async (data: { newSubSubCategory: SubsubcategoryForm }) => {
    try {
        if (!data.newSubSubCategory) return
        let formData = new FormData();
        formData.append("name", data.newSubSubCategory.name);
        formData.append("slug", data.newSubSubCategory.slug);
        formData.append("subcategoryId", data.newSubSubCategory.subcategoryId.toString());
        if (data.newSubSubCategory.file) {
            formData.append("file", data.newSubSubCategory.file);
        }
        const res = await axiosInstance.post("/subsubcategory", formData)
        if (res.data || res.status === 201) {
            return res.data
        }
    } catch (error) {
        console.log(error);
    }
}
export const updateSubSubCategory: (data: { id: number, data: updateSubsubcategoryForm }) => Promise<{ message: string, status: number, data: SubsubcategoryResponse }> = async (data: { id: number, data: updateSubsubcategoryForm }) => {
    try {
        if (!data.id || !data.data) return
        let formData = new FormData();
        if (data.data.file) formData.append("file", data.data.file);
        if (data.data.name) formData.append("name", data.data.name);
        if (data.data.slug) formData.append("slug", data.data.slug);
        if (data.data.subcategoryId) formData.append("subcategoryId", data.data.subcategoryId.toString());
        const res = await axiosInstance.patch(`/subsubcategory/${data.id}`, formData)
        if (res.data || res.status === 201) {
            return res.data
        }
    } catch (error) {
        console.log(error);
    }
}
export const deleteSubSubCategory: ({ id }: { id: number }) => Promise<{ message: string, status: number }> = async ({ id }: { id: number }) => {
    try {
        const res = await axiosInstance.delete(`/subsubcategory/${id}`)
        if (res.data || res.status === 201) {
            return res.data
        }
    } catch (error) {
        console.log(error);
    }
}