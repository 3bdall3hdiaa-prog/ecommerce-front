'use client'
import OrderAddresses from '@/features/order/components/OrderAddresses'
import OrderDetails from '@/features/order/components/OrderDetails'
import OrderHeader from '@/features/order/components/OrderHeader'
import { useGetOrderById } from '@/features/order/hooks/useGetOrderById'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const param: any = useParams()
    const { data, isLoading, error }: any = useGetOrderById({ id: param.orderid })
    if (isLoading) return <p>loading....</p>
    if (error) return console.log(error)
    const order = data.data
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            {/* Header */}
            <OrderHeader order={order} />

            {/* Order Details */}
            <OrderDetails order={order} />

            {/* Addresses */}
            <OrderAddresses order={order} />
        </div>
    )
}

export default page