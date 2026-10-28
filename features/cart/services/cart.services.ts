import axiosInstance from "@/lib/axios";
import { cartItemForm, cartResponse } from "../types/cart.types";

export const createCartItem: (data: cartItemForm) => Promise<{ message: string, status: number, data: cartResponse }> = async (data: cartItemForm) => {
    if (!data.productId || !data.quantity) return
    const res = await axiosInstance.post(`/cart?userId=${data.userId}`, { productId: data.productId, quantity: data.quantity })
    if (res.status === 201) {
        return res.data
    }
}
export const getCartItems = async ({ userId }: { userId: number }) => {
    try {
        const res = await axiosInstance.get(`/cart/${userId}`)
        return res.data
    } catch (error) {
        throw (error)
    }

}

export const updateCartItems = async (data: { id: number, quantity: number }) => {
    if (!data.id || !data.quantity) return
    const res = await axiosInstance.patch(`/cart/${data.id}`, { quantity: data.quantity })
    if (res.status === 200) {
        return res.data
    }
}
export const deleteCartItem = async ({ id }: { id: number }) => {
    if (!id) return
    const res = await axiosInstance.delete(`/cart/${id}`)
    if (res.status === 200) {
        return res.data
    }
}