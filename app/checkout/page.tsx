"use client"
import React from 'react'
import { useState } from 'react'
import { OrderSummary } from '@/components/checkout/OrderSummary'
import { useGetCartItems } from '@/features/cart/hooks/useGetCartItems'
import { useAuthStore } from '@/store/authStore'
import BillingDetails from '@/components/checkout/BillingDetails'
import { orderForm } from '@/features/order/types/order.types'
const page = () => {
    const { user } = useAuthStore()
    const [order, setOrder] = useState<orderForm>({
        fname: '',
        lname: '',
        email: user.email,
        phone: 0,
        streetAddress: '',
        city: '',
        paymentMethod: 'cash',
    })
    const { data, isLoading, error } = useGetCartItems({ userId: user.id })
    if (isLoading) return <div>loading</div>
    if (error) return <div>error</div>
    const cart = data?.data



    return (
        <div className='px-5 py-10 flex gap-x-6 w-full items-start'>
            {/*billing details */}
            <div className=' w-3/5'>
                <BillingDetails order={order} setOrder={setOrder} />
            </div>
            <OrderSummary cart={cart} />
        </div >
    )
}

export default page