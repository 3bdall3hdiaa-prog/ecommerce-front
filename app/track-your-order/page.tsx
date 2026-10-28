'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { AxiosError } from 'axios'
import { useGetOrderById } from '@/features/order/hooks/useGetOrderById'
import { orderResponse } from '@/features/order/types/order.types'

const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Track Your Order' },
]

const formatPrice = (amount: number) => `$${amount.toFixed(2)}`

const Page = () => {
    const [inputValue, setInputValue] = useState('')
    const [orderId, setOrderId] = useState<number | null>(null)

    const { data, error, isFetching } = useGetOrderById({ id: orderId as number, enabled: orderId !== null })

    const order: orderResponse | undefined = data?.data
    const errorMessage = error

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const id = parseInt(inputValue.trim())
        if (isNaN(id)) return

        setOrderId(id)
    }

    const orderItems = order?.orderItems.map(({ id, product, price, quantity }) => ({
        id,
        name: product.name,
        quantity,
        total: formatPrice(price * quantity),
    })) ?? []

    const subtotal = order?.orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0) ?? 0

    const orderTotals = order
        ? [
            { label: 'Subtotal:', value: formatPrice(subtotal), isPrice: true },
            { label: 'Shipping:', value: 'Free shipping' },
            { label: 'Payment method:', value: order.paymentMethod, capitalize: true },
            { label: 'Payment Status:', value: order.paymentStatus, capitalize: true },
            { label: 'Total:', value: formatPrice(order.totalAmount), isPrice: true },
        ]
        : []

    const addressLines = order
        ? [`${order.fname} ${order.lname}`, order.streetAddress, order.city, order.phone, order.email]
        : []

    const statusHighlights = order
        ? [
            { prefix: 'Order #', value: order.id, suffix: 'was placed on' },
            { prefix: '', value: new Date(order.createdAt).toDateString(), suffix: 'and is currently' },
            { prefix: '', value: order.status, suffix: '.', capitalize: true },
        ]
        : []

    return (
        <div className='px-5 py-8'>
            <h1 className='text-4xl font-bold'>Track Your Order</h1>

            <div className='flex items-center gap-2 mt-4 text-gray-400'>
                {breadcrumbs.map(({ label, href }, index) => (
                    <React.Fragment key={label}>
                        {href ? (
                            <Link href={href} className='hover:text-black'>{label}</Link>
                        ) : (
                            <span className='font-semibold text-black'>{label}</span>
                        )}
                        {index !== breadcrumbs.length - 1 && <span>/</span>}
                    </React.Fragment>
                ))}
            </div>

            <div className='mt-12 rounded-4xl bg-linear-to-br from-[#5B3CD6] to-[#6B52B0] px-6 py-16 md:px-16'>
                <h2 className='text-center text-6xl font-bold text-white'>Order tracking</h2>

                <div className='mx-auto mt-10 max-w-5xl'>
                    {order ? (
                        <div className='text-white'>
                            {/* Status line */}
                            <p className='flex flex-wrap items-center gap-x-2 gap-y-2'>
                                {statusHighlights.map(({ prefix, value, suffix, capitalize }, index) => (
                                    <React.Fragment key={index}>
                                        {prefix && <span>{prefix}</span>}
                                        <mark className={`bg-white px-2 py-1 font-semibold text-black ${capitalize ? 'capitalize' : ''}`}>
                                            {value}
                                        </mark>
                                        <span>{suffix}</span>
                                    </React.Fragment>
                                ))}
                            </p>

                            {/* Order details */}
                            <h3 className='mt-8 text-3xl font-semibold'>Order details</h3>

                            <div className='mt-6'>
                                <div className='flex justify-between border-b border-white/20 px-3 pb-4 font-semibold uppercase'>
                                    <p>Product</p>
                                    <p className='w-1/2'>Total</p>
                                </div>

                                {orderItems.map(({ id, name, quantity, total }) => (
                                    <div key={id} className='flex justify-between border-b border-white/20 px-3 py-4'>
                                        <p>
                                            {name} <span className='opacity-70'>× {quantity}</span>
                                        </p>
                                        <p className='w-1/2 font-semibold text-[#E0365B]'>{total}</p>
                                    </div>
                                ))}

                                {orderTotals.map(({ label, value, isPrice, capitalize }) => (
                                    <div key={label} className='flex justify-between border-b border-white/20 px-3 py-4'>
                                        <p className='font-semibold'>{label}</p>
                                        <p
                                            className={`w-1/2 ${isPrice ? 'font-semibold text-[#E0365B]' : 'opacity-80'} ${capitalize ? 'capitalize' : ''}`}
                                        >
                                            {value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Billing address */}
                            <h3 className='mt-10 text-3xl font-semibold'>Billing address</h3>
                            <div className='mt-6 space-y-3 italic opacity-80'>
                                {addressLines.map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <>
                            {errorMessage && (
                                <div className='flex items-center gap-4 rounded-2xl bg-[#E0B14F] p-6 text-white'>
                                    <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-white text-sm font-bold'>!</span>
                                    <p>Sorry, the order could not be found. Please contact us if you are having difficulty finding your order details.
                                    </p>
                                </div>
                            )}

                            <p className='mt-8 text-white/80 leading-relaxed'>
                                To track your order please enter your Order ID in the box below and press the &quot;Track&quot; button. This was given to you on your receipt and in the confirmation email you should have received.
                            </p>

                            <form onSubmit={handleSubmit} className='mt-6 flex flex-col gap-3 md:flex-row md:items-end'>
                                <div className='flex-1 space-y-2'>
                                    <label htmlFor='orderId' className='block text-white'>Order ID</label>
                                    <input
                                        id='orderId'
                                        type='number'
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        className='w-full rounded-full bg-white px-5 py-4 text-gray-700 outline-none placeholder:text-gray-400'
                                    />
                                </div>

                                <button
                                    type='submit'
                                    disabled={isFetching}
                                    className='cursor-pointer rounded-full bg-[#E0365B] px-14 py-4 font-semibold text-white transition hover:opacity-90 disabled:opacity-60'
                                >
                                    {isFetching ? 'Tracking...' : 'Track'}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Page