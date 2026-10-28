"use client"
import OrderTable from '@/features/order/components/client/OrderTable'
import { useGetOrder } from '@/features/order/hooks/useGetOrder'
import React from 'react'

const page = () => {

    const { data, isLoading, error }: any = useGetOrder()
    if (isLoading) return <p>loading .....</p>
    if (error) {
        console.log(error.response?.data.message);
        return <p>Error</p>
    }
    const orders = data.data.orders ?? []

    const handleStatus = (status: any) => {
        if (status.toLowerCase() === "completed") {
            return "bg-green-100 text-green-400"
        }
        else if (status.toLowerCase() === "pending") {
            return "bg-yellow-100 text-yellow-400"
        }
        else if (status.toLowerCase() === "cancelled" || status.toLowerCase() === "failed") {
            return "bg-red-100 text-red-400"
        }
        else if (status.toLowerCase() === "processing") {
            return "bg-blue-100 text-blue-400"
        }
        else if (status.toLowerCase() === "shipped") {
            return "bg-purple-100 text-purple-400"
        }
        else {
            return "bg-gray-100 text-gray-400"
        }
    }
    return (
        <div>
            <div className='w-full'>
                <OrderTable orders={orders} handleStatus={handleStatus} />
            </div>
        </div>
    )
}

export default page