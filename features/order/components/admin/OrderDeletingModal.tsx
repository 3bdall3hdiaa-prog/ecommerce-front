import React from 'react'
import { orderResponse } from '../../types/order.types'
import { useDeleteOrder } from '../../hooks/useDeleteOrder'

const OrderDeletingModal = ({ isDeleting, setIsDeleting, currOrder }: { isDeleting: boolean, setIsDeleting: any, currOrder: orderResponse }) => {
    const { mutate, isPending } = useDeleteOrder()
    const handleDeleteOrder = (id: number) => {
        mutate(id, {
            onSuccess: () => {
                setIsDeleting(false);
            }
        });
    };
    return (
        <>
            {isDeleting && (
                <div
                    className='fixed inset-0 z-999 bg-black/50 flex items-center justify-center'
                    onClick={() => setIsDeleting(false)}
                >
                    <div
                        className='bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p className='text-lg font-semibold mb-4'>
                            Are you sure you want to delete this order?
                        </p>

                        <div className='flex justify-end gap-x-2'>
                            <button
                                onClick={() => setIsDeleting(false)}
                                className='px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded-md'
                            >
                                Cancel
                            </button>

                            <button
                                disabled={isPending}
                                onClick={() => {
                                    handleDeleteOrder(currOrder.id);
                                }}
                                className={`px-3 py-1 bg-red-400 hover:bg-red-500 rounded-md text-white ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                                {isPending ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default OrderDeletingModal