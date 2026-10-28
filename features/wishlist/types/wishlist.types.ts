import { productResponse } from "@/features/product/types/Product";

interface WishlistItem {
    id: number;
    productId: number;
    product: productResponse;
    userId: number;
    wishlistId: number;

}
export interface WishlistItemForm {
    productId: number
}
export interface WishlistResponse {
    id: number;
    userId: number;
    wishlistItems: WishlistItem[];
}
