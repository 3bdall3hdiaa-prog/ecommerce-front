import React from 'react'
import { orderResponse } from '../../types/order.types'
import Link from 'next/link'

const OrderTable = ({
    orders,
    handleStatus
}: {
    orders: orderResponse[],
    handleStatus: (status: any) => void
}) => {
    return (
        <table className="w-full table-fixed">
            <thead>
                <tr className="uppercase border-b border-gray-300">
                    <th className="w-1/6 py-3">Order</th>
                    <th className="w-1/6">Date</th>
                    <th className="w-1/6">Status</th>
                    <th className="w-1/6">Payment</th>
                    <th className="w-1/6">Total</th>
                    <th className="w-1/6">Actions</th>
                </tr>
            </thead>

            <tbody>
                {orders.length === 0 ? (
                    <tr>
                        <td colSpan={6} className="text-center py-4">
                            No Orders found
                        </td>
                    </tr>
                ) : (
                    orders.map((order: orderResponse) => (
                        <tr
                            key={order.id}
                            className="text-center border-b border-gray-300"
                        >
                            <td className="py-5">#{order.id}</td>

                            <td>
                                {new Date(order.createdAt).toLocaleDateString()}
                            </td>

                            <td>
                                <span
                                    className={`${handleStatus(order.status)} px-2 py-1 capitalize rounded-full`}
                                >
                                    {order.status}
                                </span>
                            </td>

                            <td>
                                <span
                                    className={`${handleStatus(order.paymentStatus)} px-2 py-1 capitalize rounded-full`}
                                >
                                    {order.paymentStatus}
                                </span>
                            </td>

                            <td>${order.totalAmount}</td>

                            <td>
                                <Link
                                    href={`/my-account/view-order/${order.id}`}
                                    className="text-white px-3 py-1 bg-[#E14A5C] cursor-pointer hover:opacity-60 transition duration-200 ease-in-out rounded-full"
                                >
                                    View
                                </Link>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    )
}

export default OrderTable