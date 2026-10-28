"use client"
import CouponAddingModal from '@/features/coupon/components/admin/CouponAddingModal'
import CouponDeletingModal from '@/features/coupon/components/admin/CouponDeletingModal'
import CouponEditingModal from '@/features/coupon/components/admin/CouponEditingModal'
import CouponTable from '@/features/coupon/components/admin/CouponTable'
import { useGetCoupons } from '@/features/coupon/hooks/useGetCoupons'
import { couponResponse } from '@/features/coupon/types/coupon.types'
import React from 'react'

const page = () => {
    const { data, isLoading } = useGetCoupons()
    const [isAddOpen, setIsAddOpen] = React.useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = React.useState(false)
    const [isEditOpen, setIsEditOpen] = React.useState(false)
    const [currCoupon, setCurrCoupon] = React.useState<couponResponse>({} as any)

    if (isLoading) return <p>Loading...</p>
    const Coupons = data?.data || []



    const handleOpenModal = ({ type, coupon }: { type: 'editing' | 'deleting' | 'adding', coupon?: couponResponse }) => {
        if (type === 'adding') setIsAddOpen(true)
        if (type === 'editing') {
            setCurrCoupon(coupon as any)
            setIsEditOpen(true)
        }
        if (type === 'deleting') {
            setCurrCoupon(coupon as any)
            setIsDeleteOpen(true)
        }
    }
    return (
        <div>
            <CouponTable handleOpenModal={handleOpenModal} Coupons={Coupons} />
            {/*Modals */}
            <CouponAddingModal isAddOpen={isAddOpen} setIsAddOpen={setIsAddOpen} />
            <CouponEditingModal isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} currCoupon={currCoupon} setCurrCoupon={setCurrCoupon} />
            <CouponDeletingModal isDeleteOpen={isDeleteOpen} setIsDeleteOpen={setIsDeleteOpen} currCoupon={currCoupon} />
        </div>
    )
}

export default page