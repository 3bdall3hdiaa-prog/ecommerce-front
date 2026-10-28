export interface couponForm {
    code: string
    discount: number
    expiryDate: string
}
export interface couponResponse {
    id: number
    code: string
    discount: number
    expiryDate: string
    isActive: boolean
}
export type updateCoupon = Partial<couponForm>