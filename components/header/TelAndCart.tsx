"use client"
import React from 'react'
import { Phone } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import CartDrawer from '../../features/cart/components/CartDrawer'
import { useGetCartItems } from '@/features/cart/hooks/useGetCartItems'
const TelAndCart = ({ user }: { user: { id: number, name: string, email: string, role: string } }) => {
    const [isopen, setIsopen] = React.useState(false)
    const { data, isLoading, error } = useGetCartItems({ userId: user.id })




    return (
        <div className='flex text-white gap-x-4'>
            <div className='flex items-center gap-x-2'>
                <Phone size={30} />
                <div className='flex flex-col'>
                    <p>Hotline</p>
                    <p>01127948978</p>
                </div>
            </div>
            {user.role !== "admin" && (
                <div onClick={() => { setIsopen(true); }} className='flex hover:cursor-pointer items-center'>
                    <ShoppingCart size={40} className='pr-2 border-r border-[#FFF]' />
                    <div className='pl-2 flex flex-col'>
                        <p className='text-[#E14A5C]'>$ {data?.data.totalAmount || 0}</p>
                        <p>{data?.data.cartItems.length} items</p>
                    </div>

                </div>
            )}
            <CartDrawer isLoading={isLoading} data={data} isopen={isopen} setIsOpen={setIsopen} />
        </div>
    )
}

export default TelAndCart