import React from 'react'
import { couponResponse } from '../../types/coupon.types'
import CouponRow from './CouponRow'

type Props = {
    Coupons: couponResponse[]
    handleOpenModal: ({ type, coupon }: { type: 'editing' | 'deleting' | 'adding', coupon?: couponResponse }) => void
}
const CouponTable = ({ Coupons, handleOpenModal }: Props) => {

    return (
        <>
            <div className='p-6'>
                <div className='flex justify-between'>
                    <p className='text-xl font-semibold'>Manage Reviews</p>
                    <button onClick={() => handleOpenModal({ type: "adding" })} className='cursor-pointer bg-[#E14A5C] hover:opacity-60 text-white px-4 py-2 rounded-md'>Add Coupon</button>
                </div>
                <div className='overflow-x-auto mt-5'>

                    <table className='w-full table-fixed'>
                        <thead>
                            <tr className='border-b border-gray-300 text-center uppercase'>
                                <th className='w-30'>ID</th>
                                <th className='w-30'>Code</th>
                                <th className='w-30'>Status</th>
                                <th className='w-30'>Discount</th>
                                <th className='w-30'>ExpiryDate</th>
                                <th className='w-30'>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {Coupons.length === 0 ?
                                <tr>
                                    <td colSpan={5} className='text-center py-4'>No Coupons found</td>
                                </tr>
                                :
                                Coupons.map((coupon: any) => (
                                    <CouponRow handleOpenModal={handleOpenModal} key={coupon.id} coupon={coupon} />
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default CouponTable