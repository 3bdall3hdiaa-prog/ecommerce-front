"use client"
import React, { useState } from 'react'
import { Pencil, Trash } from 'lucide-react'
import { orderResponse } from '../../types/order.types'

interface Props {
    order: orderResponse,
    setOrderView: any,
    handleOpenModal: (type: "editing" | "deleting") => void,
    setCurrOrder: any
}
const OrderRow = ({ order, setOrderView, handleOpenModal, setCurrOrder }: Props) => {
    console.log(order)

    const handleStyle = () => {
        if (order.status === "completed") return "bg-green-100 text-green-400"
        if (order.status === "pending") return "bg-yellow-100 text-yellow-400"
        if (order.status === "cancelled") return "bg-red-100 text-red-400"
        if (order.status === "processing") return "bg-blue-100 text-blue-400"
        if (order.status === "shipped") return "bg-purple-100 text-purple-400"
        return "bg-gray-100 text-gray-400"
    }

    return (

        <tr onClick={() => { setOrderView(order); }} className='cursor-pointer hover:bg-gray-200 text-center border-b border-gray-300'>
            <td className='py-5'>#{order.id}</td>
            <td>{new Date(order.createdAt).toLocaleDateString()}</td>
            <td>{order.email.split('@')[0]}</td>

            {/* order.status */}
            <td>
                <span className={`${handleStyle()} px-3 py-1 rounded-full capitalize`}>
                    {order.status}
                </span>
            </td>

            {/* order.paymentMethod */}
            <td>
                <span className='px-3 py-1 rounded-full capitalize'>
                    {order.paymentMethod}
                </span>
            </td>

            <td>${order.totalAmount.toFixed(2)} for {order.totalQuantity} items</td>

            <td onClick={(e) => e.stopPropagation()}>
                <div className='flex items-center justify-center gap-x-4'>
                    <Pencil
                        onClick={() => {
                            setCurrOrder(order)
                            handleOpenModal('editing')
                        }}
                        className='text-blue-300 hover:text-blue-500 cursor-pointer'
                    />
                    <Trash onClick={() => { setCurrOrder(order); handleOpenModal('deleting') }} className='text-red-300 hover:text-red-500 cursor-pointer' />
                </div>
            </td>
        </tr >



    )
}

export default OrderRow