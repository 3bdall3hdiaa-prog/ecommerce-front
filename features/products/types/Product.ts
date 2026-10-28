import { SubsubcategoryResponse } from "@/features/subsubcategory/types/subsubcategory";
import { Subsubcategory } from "@/types";



export type productResponse = {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: number;
    ratings: number;
    discount: number;
    priceAfterDiscount: number;
    subsubcategoryId: number;
    subsubcategory: SubsubcategoryResponse;
    images: { mainImage: { url: string, public_id: string }, otherImages: { url: string, public_id: string }[] };
    stock: number;
    colors?: { color: string, quantity: number }[];
    createdAt: string;
    updatedAt: string;
    isFeatured: boolean;
    isRecommended: boolean
};
export type productForm = {
    name: string;
    slug: string;
    description: string;
    price: string;
    discount: string;
    subsubcategoryId: string;
    files: any | null
    stock: string;
    colors: { color: string, quantity: number }[];
    isFeatured: boolean;
    isRecommended: boolean
};
export type updataProduct = Partial<productForm>