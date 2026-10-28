import React from 'react'
import { Pencil, Trash } from 'lucide-react'
import { couponResponse } from '../../types/coupon.types'

type Props = {
    coupon: couponResponse,
    handleOpenModal: ({ type, coupon }: { type: 'editing' | 'deleting' | 'adding', coupon?: couponResponse }) => void
}

const CouponRow = ({ coupon, handleOpenModal }: Props) => {
    function handleStatus(isActive: boolean) {
        if (isActive) {
            return "text-green-500 bg-green-100"
        } else {
            return "text-red-500 bg-red-100"
        }
    }
    return (
        <tr key={coupon.id} className='border-b border-gray-300'>
            <td className='text-center py-4'>{coupon.id}</td>
            <td className='text-center'>"{coupon.code}"</td>
            <td className='text-center' ><span className={`${handleStatus(coupon.isActive)} px-3 py-1 rounded-full capitalize`}> {coupon.isActive ? "Active" : "Inactive"}</span></td>
            <td className='text-center'>{coupon.discount}%</td>
            <td className='text-center'>{new Date(coupon.expiryDate).toLocaleDateString()}</td>
            <td >
                <div className='flex items-center justify-center gap-x-4'>
                    <Pencil
                        onClick={() => { handleOpenModal({ type: "editing", coupon }) }}
                        className='text-blue-300 hover:text-blue-500 cursor-pointer'
                    />
                    <Trash onClick={() => { handleOpenModal({ type: "deleting", coupon }) }} className='text-red-300 hover:text-red-500 cursor-pointer' />
                </div>
            </td>
        </tr>
    )
}

export default CouponRow