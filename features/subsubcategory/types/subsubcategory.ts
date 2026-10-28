import { SubCategoryResponse } from "@/features/subcategory/types/subcategory.types";

export interface SubsubcategoryResponse {
    id: number;
    name: string;
    slug: string;
    subcategoryId: number;
    image: {
        url: string;
        public_id: string;
    };
    subcategory: SubCategoryResponse
    createdAt: string;
    updatedAt: string;

}
export interface SubsubcategoryForm {
    name: string;
    slug: string;
    subcategoryId: number;
    file: File | null;
}
export type updateSubsubcategoryForm = Partial<SubsubcategoryForm>;
