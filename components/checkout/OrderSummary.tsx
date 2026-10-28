import React from 'react'
import { X } from 'lucide-react'
import { useDeleteCartItem } from '@/features/cart/hooks/useDeleteCartItem'

export const OrderSummary = ({ cart }: any) => {
    const Shipping = 5
    const cartItems = cart.cartItems
    const { mutate } = useDeleteCartItem()
    const handleDelete = (id: number) => {
        let confirm = window.confirm("Are you sure you want to delete this product from the cart?")
        if (confirm) {
            mutate({ id })
        }
    }
    return (
        < div className='w-2/5 px-4  py-8 bg-white rounded-2xl h-auto' >
            <p className='text-2xl font-semibold'>Your order</p>
            <div className='mt-2 py-3 border-b border-gray-200 flex justify-between uppercase'>
                <p>Product</p>
                <p>Subtotal</p>
            </div>
            <div className='py-3 border-b border-gray-200'>
                {cartItems.map((cartItem: any) => {
                    const product = cartItem.product
                    return (
                        <div key={product.id} className='flex justify-between items-center'>
                            <div className=' flex gap-x-10 items-center    '>

                                <X onClick={() => { handleDelete(cartItem.id) }} color='black' size={30} className='rounded-full p-2 cursor-pointer hover:bg-gray-300' />
                                {/*box of image */}
                                <div className='w-20 h-20 overflow-hidden rounded-2xl'>
                                    {product.images && <img className='object-cover w-full h-full' src={product.images.mainImage.url} alt='' />}
                                </div>

                                <div className='flex flex-col  gap-y-1'>
                                    <p className='font-normal text-sm text-gray-500'>{product.name}</p>
                                    <p className='font-semibold text-sm text-gray-500'>{cartItem.quantity}</p>

                                </div>

                            </div>
                            <p className='text-gray-400'>${cartItem.price}</p>
                        </div>
                    )
                })}
            </div>
            <div className=' border-b border-gray-200 py-3 flex justify-between'>
                <p>Subtotal </p>
                <p className='text-[#E14A5C]'>${cart.totalAmount}</p>
            </div>
            <div className='py-6 border-b border-gray-200 flex justify-between'>
                <p>Shipping </p>
                <p className='text-green-500'>Free Shipping</p>
            </div>
            <div className='py-3 border-b border-gray-200 flex justify-between'>
                <p>Total</p>
                <p className='text-[#E14A5C] text-xl'>${(cart.totalAmount)}</p>
            </div>
        </div >
    )
}
