import React from 'react'
import Tr from './Tr'
import { productResponse } from '@/features/products/types/Product'
import { data } from 'framer-motion/client'
import { cartResponse } from '../types/cart.types'
import { useDeleteCartItem } from '../hooks/useDeleteCartItem'
interface Props {
    cart: cartResponse,
}
const CartTable = ({ cart }: Props) => {
    const cartItems = cart.cartItems
    const { mutate } = useDeleteCartItem()
    const handleDelete = (id: number) => {
        let confirm = window.confirm("Are you sure you want to delete this product from the cart?")
        if (confirm) {
            mutate({ id })
        }
    }

    return (
        <div className=' p-4 bg-white w-4/6 overflow-hidden   rounded-2xl  '>
            <table className='w-full '>
                <thead className='border-b-2 border-gray-200'>
                    <tr >
                        <th className='p-3'>PRODUCT</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody className='   '>
                    {(cartItems).map((cartItem: any) => (


                        <Tr handleDelete={handleDelete} key={cartItem.id} cartItem={cartItem} />
                    ))}


                </tbody>


            </table>
            {/* apply coupon */}
            <div className='pt-5 flex  items-center gap-x-4'>
                <input type="text" placeholder='Coupon code' className='border-2 border-gray-200 w-2/6 p-2 rounded-2xl' />
                <button className='bg-[#E14A5C] text-white px-4 py-2 rounded-2xl'>Apply Coupon</button>
            </div>
        </div>
    )
}

export default CartTable