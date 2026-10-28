import axiosInstance from "@/lib/axios"
import { orderForm } from "../types/order.types"

export const createOrder = async (data: orderForm) => {
    const res = await axiosInstance.post("/order", data)
    return res.data

}
export const getOrder = async () => {
    const res = await axiosInstance.get('order/getOne')
    if (res.status === 201 || res.status === 200) {
        return res.data
    }
}
export const getOrderById = async (id: number) => {
    try {
        const Id = +id
        const res = await axiosInstance.get(`order/${Id}`)
        if (res.status === 201 || res.status === 200) {
            return res.data
        }
    } catch (err) {
        console.log(err)
    }
}
export const getOrders = async (id: number | null) => {
    const res = await axiosInstance.get(`order?search=${id}`)
    if (res.status === 201 || res.status === 200) {
        return res.data
    }
}
export const updateOrder = async ({ id, status, paymentStatus }: { id: number, status: string, paymentStatus: string }) => {

    const res = await axiosInstance.patch(`order/${id}`, { status, paymentStatus })
    if (res.status === 201 || res.status === 200) {
        return res.data
    }
}
export const deleteOrder = async (id: number) => {
    const res = await axiosInstance.delete(`order/${id}`)
    if (res.status === 201 || res.status === 200) {
        return res.data
    }
}