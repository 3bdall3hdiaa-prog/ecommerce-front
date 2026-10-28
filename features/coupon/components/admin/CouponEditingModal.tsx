import React from 'react'
import { couponResponse } from '../../types/coupon.types'
import { useUpdateCoupon } from '../../hooks/useUpdateCoupon'
type Props = {
    isEditOpen: boolean
    setIsEditOpen: any
    currCoupon: couponResponse
    setCurrCoupon: any
}
const CouponEditingModal = ({ isEditOpen, setIsEditOpen, currCoupon, setCurrCoupon }: Props) => {
    const { mutate, isPending } = useUpdateCoupon()
    const handleEditingCoupon = () => {
        mutate({ id: currCoupon.id, data: currCoupon }, {
            onSuccess: () => {
                setIsEditOpen(false)
                alert("Coupon edited successfully")
            },
            onError: (err) => {
                alert(err.response?.data.message || err.message);
            }
        })
    }
    return (
        <>
            {isEditOpen && <div onClick={() => setIsEditOpen(false)} className='z-999 inset-0 bg-black/50 fixed flex items-center justify-center'>
                <div onClick={(e) => e.stopPropagation()} className='w-96 bg-white p-6 rounded-md'>
                    <h2 className='text-lg font-bold mb-4'>Add Coupon</h2>
                    <form onSubmit={(e) => { e.preventDefault(); handleEditingCoupon() }}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="code">
                                Code
                            </label>
                            <input
                                value={currCoupon?.code}
                                onChange={(e) => setCurrCoupon({ ...currCoupon, code: e.target.value })}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="code"
                                minLength={3}
                                type="text"
                                placeholder="Enter Coupon Code"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="expiryDate">
                                ExpiryDate
                            </label>
                            <input
                                value={currCoupon?.expiryDate}
                                onChange={(e) => setCurrCoupon({ ...currCoupon, expiryDate: e.target.value })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="expiryDate"
                                type="date"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="discount">
                                Discount
                            </label>
                            <input
                                value={currCoupon?.discount}
                                onChange={(e) => setCurrCoupon({ ...currCoupon, discount: e.target.valueAsNumber })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="discount"
                                type="number"
                            />
                        </div>
                        <div className={` mb-4 cursor-pointer `}>
                            <label className="block mb-1 font-medium text-gray-700">Status</label>
                            < p

                                onClick={() => setCurrCoupon((prev: any) => ({ ...prev, isActive: !prev.isActive }))}
                                className={`text-center w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent ${currCoupon.isActive ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}
                            >{currCoupon.isActive ? "true" : "false"}</p>
                        </div>
                        <button

                            className={` bg-[#E14A5C] hover:opacity-60 transition duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            type="submit"
                            disabled={isPending}
                        >
                            {isPending ? 'Editing...' : 'Edit Coupon'}
                        </button>
                    </form>

                </div>
            </div>
            }
        </>
    )
}

export default CouponEditingModal