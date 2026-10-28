'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { useGetOrderById } from '@/features/order/hooks/useGetOrderById'
import { orderResponse } from '@/features/order/types/order.types'

const Page = () => {
    const { orderId } = useParams<{ orderId: string }>()
    const { data, isLoading } = useGetOrderById({ id: parseInt(orderId), enabled: true })

    if (isLoading) {
        return <div>Loading...</div>
    }

    const order: orderResponse = data?.data

    const formatPrice = (amount: number) => `$${amount.toFixed(2)}`
    const subtotal = order.orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const orderSummary = [
        { label: 'Order number:', value: order.id },
        { label: 'Date:', value: new Date(order.createdAt).toDateString() },
        { label: 'Email:', value: order.email },
        { label: 'Total:', value: formatPrice(order.totalAmount) },
        { label: 'Payment method:', value: order.paymentMethod, capitalize: true },
    ]

    const orderItems = order.orderItems.map(({ id, product, price, quantity }) => ({
        id,
        name: product.name,
        quantity,
        total: formatPrice(price * quantity),
    }))

    const orderTotals = [
        { label: 'Subtotal:', value: formatPrice(subtotal), isPrice: true },
        { label: 'Shipping:', value: 'Free shipping' },
        { label: 'Payment method:', value: order.paymentMethod, capitalize: true },
        { label: 'Payment Status:', value: order.paymentStatus, capitalize: true },
        { label: 'Total:', value: formatPrice(order.totalAmount), isPrice: true },
    ]

    const addressLines = [
        `${order.fname} ${order.lname}`,
        order.streetAddress,
        order.city,
        order.phone,
        order.email,
    ]

    const addresses = [
        { title: 'Billing address', lines: addressLines },
        { title: 'Shipping address', lines: addressLines },
    ]

    return (
        <div className='py-4 mt-10'>
            <div className='flex justify-center'>
                <p className='text-center w-1/2 p-5 text-2xl border-3 rounded-3xl border-[#7A9C59] border-dashed text-[#7A9C59]'>
                    Thank you. Your order has been received.
                </p>
            </div>

            {/* Order Summary */}
            <div className='flex px-12 mt-11'>
                {orderSummary.map(({ label, value, capitalize }, index) => (
                    <div
                        key={label}
                        className={`flex-1 p-4 space-y-3 text-center ${index !== orderSummary.length - 1 ? 'border-r border-gray-300' : ''}`}
                    >
                        <p className='text-gray-400'>{label}</p>
                        <p className={`font-semibold ${capitalize ? 'capitalize' : ''}`}>{value}</p>
                    </div>
                ))}
            </div>

            {/* Order Details */}
            <div className='px-12 mt-11'>
                <h2 className='text-3xl font-semibold mb-8'>Order details</h2>

                <div className='flex justify-between pb-4 border-b border-gray-300 font-semibold uppercase'>
                    <p>Product</p>
                    <p>Total</p>
                </div>

                {orderItems.map(({ id, name, quantity, total }) => (
                    <div key={id} className='flex justify-between py-4 border-b border-gray-300'>
                        <p>
                            {name} <span className='text-gray-400'>× {quantity}</span>
                        </p>
                        <p className='font-semibold text-[#E0365B]'>{total}</p>
                    </div>
                ))}

                {orderTotals.map(({ label, value, isPrice, capitalize }) => (
                    <div key={label} className='flex justify-between py-4 border-b border-gray-300'>
                        <p className='font-semibold'>{label}</p>
                        <p
                            className={`${isPrice ? 'font-semibold text-[#E0365B]' : 'text-gray-400'} ${capitalize ? 'capitalize' : ''}`}
                        >
                            {value}
                        </p>
                    </div>
                ))}
            </div>

            {/* Addresses */}
            <div className='px-12 mt-11 grid grid-cols-2 gap-10'>
                {addresses.map(({ title, lines }) => (
                    <div key={title}>
                        <h2 className='text-3xl font-semibold mb-6'>{title}</h2>
                        <div className='space-y-3 italic text-gray-400'>
                            {lines.map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page