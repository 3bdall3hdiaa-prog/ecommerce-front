"use client"
import React from 'react'
import Link from 'next/link';
import CartTable from '@/features/cart/components/CartTable';
import { useGetCartItems } from '@/features/cart/hooks/useGetCartItems';
import { useAuthStore } from '@/Store/authStore';
const page = () => {
    const { user } = useAuthStore()
    const { data, isLoading, error } = useGetCartItems({ userId: user.id })
    if (isLoading) return <div>loading</div>
    if (error) return <div>error</div>
    const cart = data?.data

    return (
        <div className='items-start px-5 py-10 flex gap-x-6 w-full'>
            {/* cart */}
            <CartTable cart={cart} />

            {/* cart totals */}
            <div className='bg-white w-2/6 h-90 rounded-2xl px-4 py-8'>

                <p className='text-2xl '>Cart Totals</p>
                <div className='flex flex-col gap-y-6 mt-5'>

                    <div className='flex justify-between'>
                        <p>Subtotal :</p>
                        <p>${cart.totalAmount}</p>
                    </div>
                    <hr className='text-gray-200'></hr>
                    <div className='flex justify-between'>
                        <p>Shipping :</p>
                        <p className='text-green-500'>Free Shipping</p>
                    </div>
                    <hr className='text-gray-200'></hr>
                    <div className='flex justify-between'>
                        <p>Total :</p>
                        <p>${cart.totalAmount}</p>

                    </div>
                    <Link href={'/checkout'} className='text-center cursor-pointer hover:opacity-60 bg-[#E14A5C] text-white px-4 py-2 rounded-full'>Proceed to checkout</Link>

                </div>

            </div>

        </div>
    )
}

export default page