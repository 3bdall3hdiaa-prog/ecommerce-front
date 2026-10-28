import React from 'react'
import { orderResponse } from '../types/order.types'

const OrderHeader = ({ order }: { order: orderResponse }) => {
    return (
        <p className="text-gray-500 mb-8">
            Order # <span className="text-black font-medium">{order.id}</span> was placed on{" "}
            <span className="text-black font-medium">
                {new Date(order.createdAt).toLocaleDateString()}
            </span>{" "}
            and is currently{" "}
            <span className="text-yellow-600 font-semibold">{order.status}</span>
        </p>
    )
}

export default OrderHeader