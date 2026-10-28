import { SubCategoryResponse } from "@/features/subcategory/types/subcategory.types"

export interface CategoryResponse {
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: {
        url: string;
        public_id: string;
    }
    subcategories: SubCategoryResponse[],
    createdAt?: string;
    updatedAt?: string;

}
export interface CategoryForm {
    name: string;
    slug: string;
    icon: string;
    file: File | null;

}