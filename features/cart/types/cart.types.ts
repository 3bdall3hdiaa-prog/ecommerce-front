import { productResponse } from "@/features/product/types/Product";

export interface cartItem {
    id: number;
    cartId: number;
    productId: number;
    product: productResponse;
    price: number;
    quantity: number;
    createdAt: string;
    updatedAt: string;
}
export interface cartResponse {
    id: number;
    userId: number;
    cartItems: cartItem[];
    totalAmount: number;
    totalQuantity: number;
    createdAt: string;
    updatedAt: string;
}
export interface cartItemForm {
    userId: number;
    productId: number;
    quantity: number;
}
export interface updateCartItemForm extends Partial<cartItemForm> { }