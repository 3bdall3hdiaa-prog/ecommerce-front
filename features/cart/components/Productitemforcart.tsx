import React from 'react'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation';
import { cartItem } from '../types/cart.types';
import { productResponse } from '@/features/products/types/Product';
const Productitemforcart = ({ cartItem, handleDelete }: { cartItem: cartItem, handleDelete: (id: number) => void }) => {
    const product: productResponse = cartItem.product
    const router = useRouter()
    return (
        <div onClick={() => {
            router.push(`/product/${product.id}`)
        }} className=' w-full flex justify-between items-center p-3 hover:bg-gray-200 cursor-pointer transition-all duration-100'>

            <div className='flex gap-x-2 items-center'>
                {/*box of image */}
                <div className='w-20 h-20 overflow-hidden rounded-2xl'>
                    {product.images && < img className='object-cover w-full h-full' src={product.images.mainImage.url} alt='' />}
                </div>
                <div className='flex flex-col gap-y-2 text-black'>
                    <div className='flex justify-between gap-x-2'>
                        <p>{product.name}</p>
                        <span className={`${cartItem.quantity > 1 ? 'block  ' : 'hidden'}`}>({cartItem.quantity})</span>

                    </div>
                    <p className='text-[#E14A5C]'>${cartItem.price}</p>
                </div>
            </div>

            <X onClick={(e) => { handleDelete(cartItem.id); e.stopPropagation() }} color='black' size={30} className='rounded-full p-2 hover:bg-gray-300' />
        </div>
    )
}

export default Productitemforcart