import { productResponse } from "@/features/product/types/Product"
import { UserResponse } from "@/features/user/types/user.types"

export interface orderItem {
    id: number
    orderId: number
    productId: number,
    product: productResponse,
    quantity: number
    price: number
    createdAt: string,
    updatedAt: string
}
export interface orderForm {
    fname: string,
    lname: string,
    email: string,
    phone: number | null,
    streetAddress: string,
    city: string,
    paymentMethod: 'cash' | 'card',
    orderNotes?: string,
}
export interface orderResponse {
    id: number,
    userId: number | null,
    guestId: number | null,
    user: UserResponse,
    fname: string,
    lname: string,
    email: string,
    phone: number | null,
    streetAddress: string,
    city: string,
    paymentMethod: 'cash' | 'card',
    paymentStatus: 'pending' | 'completed' | 'failed',
    status: 'pending' | 'completed' | 'cancelled' | 'processing' | 'shipped',
    orderItems: orderItem[],
    totalAmount: number,
    totalQuantity: number,
    orderNotes?: string,
    createdAt: string,
    updatedAt: string
}