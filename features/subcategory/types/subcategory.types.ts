import { CategoryResponse } from "@/features/category/types/category.types"

export interface SubCategoryResponse {
    id: number,
    name: string,
    categoryId: number,
    image: {
        url: string,
        public_id: string
    },
    slug: string,
    category: CategoryResponse
    createdAt: string,
    updatedAt: string,
    file?: File
}
export interface SubCategoryForm {
    name: string,
    slug: string,
    file: File,
    categoryId: string,
}

// export interface UpdateSubCategoryForm {
//     name?: string,
//     slug?: string,
//     file?: File,
//     categoryId?: number,
// }