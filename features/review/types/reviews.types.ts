import { productResponse } from "@/features/product/types/Product"

export interface ReviewForm {
    productId: number,
    rating: number,
    comment: string
}
export interface ReviewResponse {
    id: number,
    productId: number,
    userId: number,
    user: any,
    product: productResponse,
    rating: number,
    comment: string,
    createdAt: string,
    updatedAt: string
}