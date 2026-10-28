import React from 'react'
import { useUpdatingOrder } from '../../hooks/useUpdatingOrder';
import { orderResponse } from '../../types/order.types';

const OrderEditingModal = ({ isEditing, setIsEditing, currOrder }: { isEditing: boolean, setIsEditing: any, currOrder: orderResponse }) => {
    const [status, setStatus] = React.useState<"pending" | "completed" | "cancelled" | "processing" | "shipped" | ''>('')
    const [paymentStatus, setPaymentStatus] = React.useState<"pending" | "completed" | "failed" | ''>('')

    const { mutate, isPending } = useUpdatingOrder()
    const handleUpdateOrderStatus = (id: number, data: { status: string, paymentStatus: string }) => {
        mutate({ id, ...data }, {
            onSuccess: () => {
                setIsEditing(false);
            }
        });
    };
    React.useEffect(() => {
        if (!currOrder) return;

        setStatus(currOrder.status ?? "");
        setPaymentStatus(currOrder.paymentStatus ?? "");
    }, [currOrder]);
    return (
        <>
            {
                isEditing && (
                    <div
                        className='fixed inset-0 z-999 bg-black/50 flex items-center justify-center'
                        onClick={() => setIsEditing(false)}
                    >
                        <div
                            className='bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <p className='text-lg font-semibold mb-4'>
                                Edit Order Status
                            </p>

                            <select
                                value={status}
                                onChange={(e: any) => setStatus(e.target.value)}
                                className='w-full border border-gray-300 rounded-md px-3 py-2 mb-4'
                            >
                                <option disabled value="">Select Status</option>
                                <option value="pending">Pending</option>
                                <option value="completed">Completed</option>
                                <option value="cancelled">Cancelled</option>
                                <option value="shipped">Shipped</option>
                                <option value="processing">Processing</option>
                            </select>
                            <select
                                value={paymentStatus}
                                onChange={(e: any) => setPaymentStatus(e.target.value)}
                                className='w-full border border-gray-300 rounded-md px-3 py-2 mb-4'
                            >
                                <option disabled value="">Select Payment Status</option>
                                <option value="pending">Pending</option>
                                <option value="completed">Completed</option>
                                <option value="failed">Failed</option>

                            </select>

                            <div className='flex justify-start gap-x-2'>

                                <button
                                    disabled={isPending}
                                    onClick={() => {
                                        handleUpdateOrderStatus(currOrder.id, { status, paymentStatus })
                                    }}
                                    className={`px-3 py-1 bg-blue-400 hover:bg-blue-500 rounded-md text-white ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                >
                                    {isPending ? 'Saving...' : 'Save'}
                                </button>
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className='px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded-md'
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default OrderEditingModal