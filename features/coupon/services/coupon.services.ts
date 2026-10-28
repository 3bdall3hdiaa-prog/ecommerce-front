import axiosInstance from "@/lib/axios";
import { couponForm, updateCoupon } from "../types/coupon.types";

export const createCoupon = async (data: couponForm) => {
    if (!data.code || !data.discount || !data.expiryDate) return
    const res = await axiosInstance.post("/coupon", data)
    return res.data
}
export const getCoupons = async () => {
    const res = await axiosInstance.get("/coupon")
    return res.data
}
export const checkCoupon = async (data: { code: string }) => {
    if (!data.code) return
    const res = await axiosInstance.post("/coupon/check", data)
    return res.data
}
export const updataCoupon = async ({ id, data }: { id: number, data: updateCoupon }) => {
    if (!id || !data) return
    const res = await axiosInstance.patch(`/coupon/${id}`, data)
    return res.data
}
export const deleteCoupon = async (data: { id: number }) => {
    if (!data.id) return
    const res = await axiosInstance.delete(`/coupon/${data.id}`)
    return res.data
}