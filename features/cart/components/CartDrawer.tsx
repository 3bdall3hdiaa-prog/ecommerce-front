import React from 'react'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Productitemforcart from './Productitemforcart'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'
import Link from 'next/link'
import { useDeleteCartItem } from '@/features/cart/hooks/useDeleteCartItem'
const CartDrawer = ({ isopen, setIsOpen, removeItem, isLoading, data }: any) => {
    if (isLoading) return <div>Loading</div>
    const cart = data?.data
    const router = useRouter()
    const { mutate } = useDeleteCartItem()
    const handleDelete = (id: number) => {
        let confirm = window.confirm("Are you sure you want to delete this product from the cart?")
        if (confirm) {
            mutate({ id })
        }
    }
    return (
        <>
            {/* الخلفية */}
            <div
                onClick={() => setIsOpen(false)}
                className={`z-[9999] inset-0 fixed bg-black/50 transition-opacity duration-500 ${isopen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            />

            {/* البوكس نفسه */}
            <div
                className={`z-[9999] fixed top-0 right-0 h-full w-90 bg-white py-4 flex flex-col gap-y-4 
      transform transition-transform duration-500 ease-in-out
      ${isopen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
            >
                {/* Sign in و زر الإغلاق */}
                <div className='text-lg text-black px-4 flex justify-between'>
                    <p className='font-semibold'>Shopping cart    </p>
                    <div className='flex items-center gap-x-2 cursor-pointer' onClick={() => setIsOpen(false)}>
                        <X />
                        Close
                    </div>
                </div>

                <hr className='text-gray-300' />
                {
                    (cart.cartItems).length === 0 ? (
                        <div className='p-5 items-center justify-center flex flex-col gap-y-4'>
                            <RemoveShoppingCartIcon sx={{ fontSize: "100px" }} className='text-gray-200 ' />
                            <p className='text-black'>No products in the cart.</p>
                            <button onClick={() => { setIsOpen(false); router.push("/") }} className='rounded-full cursor-pointer hover:opacity-60 px-4 py-2 bg-[#E14A5C]'>Continue Shopping</button>
                        </div>
                    )
                        :
                        <>
                            <div className='w-full h-3/5 overflow-auto'>
                                {/* box of product */}
                                {(cart.cartItems).map((cartItem: any, index: number) => (<Productitemforcart handleDelete={handleDelete} cartItem={cartItem} key={cartItem.id} />))}


                            </div>

                            <hr className='text-gray-300' />
                            <div className='flex justify-between px-4 items-center'>
                                <p className='text-black font-semibold text-lg'>Subtotal:</p>
                                <p className='text-[#E14A5C] text-lg'>${cart.totalAmount}</p>
                            </div>
                            <hr className='text-gray-300' />
                            <div className='px-3 flex flex-col   gap-y-3'>
                                <Link onClick={() => { setIsOpen(false) }} href="/cart" className='text-center text-black rounded-full cursor-pointer hover:bg-gray-300 w-full py-2 bg-gray-100'  >View Cart</Link>
                                <Link onClick={() => { setIsOpen(false) }} href="/checkout" className='text-center text-white rounded-full cursor-pointer hover:bg-red-500 w-full py-2 bg-[#E14A5C]'  >Checkout</Link>
                            </div>
                        </>

                }

            </div>

        </>
    )
}

export default CartDrawer