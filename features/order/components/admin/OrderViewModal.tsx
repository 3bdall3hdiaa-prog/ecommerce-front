import React from 'react'
import { orderItem, orderResponse } from '../../types/order.types'

const OrderViewModal = ({ orderView, setOrderView }: { orderView: orderResponse, setOrderView: any }) => {
    const orderItems = orderView?.orderItems ?? []
    return (
        <>
            {orderView && (
                <div
                    className='fixed inset-0 z-999   bg-black/50 flex items-center justify-center'
                    onClick={() => setOrderView(null)}
                >
                    <div
                        className='bg-white rounded-2xl p-6 w-[95%] max-w-lg shadow-xl'
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-xl font-bold'>Order Details</h2>
                            <button
                                onClick={() => setOrderView(null)}
                                className='text-gray-400 hover:text-black text-lg'
                            >
                                ✕
                            </button>
                        </div>

                        {/* Basic Info */}
                        <div className='space-y-1 text-sm mb-4'>
                            <p><span className='font-semibold'>Order ID:</span> {orderView.id}</p>
                            <p><span className='font-semibold'>Date:</span> {new Date(orderView.createdAt).toLocaleDateString()}</p>
                            <p>
                                <span className='font-semibold'>Status:</span>{" "}
                                <span className='capitalize'>{orderView.status}</span>
                            </p>
                            <p>
                                <span className='font-semibold'>PaymentStatus:</span>{" "}
                                <span className='capitalize'>{orderView.paymentStatus}</span>
                            </p>
                        </div>

                        {/* Items */}
                        <div className='border-t pt-4'>
                            <p className='font-semibold mb-2'>Items</p>

                            {orderItems.map((item: orderItem) => (
                                <div
                                    key={item.id}
                                    className='flex justify-between items-center py-2 border-b text-sm'
                                >
                                    <div>
                                        <p className='font-medium'>{item.product.name}</p>
                                        <p className='text-gray-400'>
                                            {item.quantity} × ${item.price}     black
                                        </p>
                                    </div>

                                    <p className='font-medium'>
                                        ${(item.quantity * item.price).toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className='mt-4 flex justify-between items-center font-semibold'>
                            <span>Total</span>
                            <span>${orderView.totalAmount.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default OrderViewModal