import React from 'react'
import { useDeleteCoupon } from '../../hooks/useDeleteCoupon'
type Props = {
    currCoupon: any,
    isDeleteOpen: boolean,
    setIsDeleteOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const CouponDeletingModal = ({ currCoupon, isDeleteOpen, setIsDeleteOpen }: Props) => {
    const { mutate, isPending } = useDeleteCoupon()
    const confirmdelete = () => {

        mutate({ id: currCoupon.id }, {
            onSuccess: () => {
                alert("Coupon deleted successfully")
                setIsDeleteOpen(false)
            },
            onError: (err) => {
                console.log(err);
            }
        })

    }


    return (
        <>
            {isDeleteOpen && (
                <div onClick={() => setIsDeleteOpen(false)} className='fixed inset-0 bg-black/50 flex items-center justify-center z-999'>
                    <div className='bg-white p-6 rounded-md w-96' onClick={(e) => e.stopPropagation()}>
                        <h2 className='text-lg font-bold mb-4'>Delete Coupon</h2>
                        <p>Are you sure you want to delete this Coupon?</p>
                        <div className='flex justify-end gap-4 mt-4'>
                            <button
                                onClick={() => setIsDeleteOpen(false)}
                                className="cursor-pointer bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Cancel
                            </button>
                            <button
                                disabled={isPending}
                                onClick={confirmdelete}
                                className={` ${isPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                                type="submit"
                            >
                                {isPending ? "Deleting..." : "Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default CouponDeletingModal