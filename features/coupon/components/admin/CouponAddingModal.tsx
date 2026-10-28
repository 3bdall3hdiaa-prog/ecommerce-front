import React from 'react'
import { couponForm } from '../../types/coupon.types'
import { useCreateCoupon } from '../../hooks/useCreateCoupon'

const CouponAddingModal = ({ isAddOpen, setIsAddOpen }: any) => {
    const [newCoupon, setNewCoupon] = React.useState<couponForm>({ code: "", discount: 0, expiryDate: "" })

    const { mutate, isPending } = useCreateCoupon()

    const handleAddingCoupon = () => {
        mutate(newCoupon as any, {
            onSuccess: () => {
                setIsAddOpen(false)
                setNewCoupon({ code: "", discount: 0, expiryDate: "" })
                alert("Coupon added successfully")
            },
            onError: (err) => {
                alert(err.response?.data.message || err.message);
            }
        },
        )
    }
    return (
        <>
            {isAddOpen && <div onClick={() => setIsAddOpen(false)} className='z-999 inset-0 bg-black/50 fixed flex items-center justify-center'>
                <div onClick={(e) => e.stopPropagation()} className='w-96 bg-white p-6 rounded-md'>
                    <h2 className='text-lg font-bold mb-4'>Add Coupon</h2>
                    <form onSubmit={(e) => { e.preventDefault(); handleAddingCoupon() }}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="code">
                                Code
                            </label>
                            <input
                                onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value })}
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
                                onChange={(e) => setNewCoupon({ ...newCoupon, expiryDate: e.target.value })}
                                required
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
                                onChange={(e) => setNewCoupon({ ...newCoupon, discount: e.target.valueAsNumber })}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="discount"
                                type="number"
                            />
                        </div>
                        <button

                            className={` bg-[#E14A5C] hover:opacity-60 transition duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            type="submit"
                            disabled={isPending}
                        >
                            {isPending ? 'Adding...' : 'Add Coupon'}
                        </button>
                    </form>

                </div>
            </div>
            }
        </>
    )
}

export default CouponAddingModal