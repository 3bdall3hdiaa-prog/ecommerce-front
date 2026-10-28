import React from 'react'
import { orderResponse } from '../types/order.types'
import { cartItem } from '@/features/cart/types/cart.types'

const OrderDetails = ({ order }: { order: orderResponse }) => {
    const cartItems = order.orderItems
    return (
        <div className="bg-white shadow rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Order Details</h2>

            <div className="border rounded-xl overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-2 bg-gray-100 p-4 font-semibold">
                    <span>Product</span>
                    <span className="text-right">Total</span>
                </div>

                {/* Product Row */}
                <div className="grid grid-cols-2 p-4 border-t">
                    {cartItems.map((el: any) => {
                        const product = el.product
                        return (
                            <>
                                <span>{product.name}  (×{el.quantity})</span>
                                <span className="text-right">${el.price}</span>
                            </>
                        )
                    })}
                </div>

                {/* Subtotal */}
                <div className="grid grid-cols-2 p-4 border-t">
                    <span>Subtotal:</span>
                    <span className="text-right">${order.totalAmount}</span>
                </div>

                {/* Shipping */}
                <div className="grid grid-cols-2 p-4 border-t">
                    <span>Shipping:</span>
                    <span className="text-right text-green-600">
                        Free shipping
                    </span>
                </div>

                {/* Payment */}
                <div className="grid grid-cols-2 p-4 border-t">
                    <span>Payment method:</span>
                    <span className="text-right">{order.paymentMethod}</span>
                </div>

                {/* Total */}
                <div className="grid grid-cols-2 p-4 border-t font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-right">${order.totalAmount}</span>
                </div>
            </div>
        </div>

    )
}

export default OrderDetails