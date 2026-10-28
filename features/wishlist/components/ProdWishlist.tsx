"use client"
import React from 'react'
import Rating from '@mui/material/Rating';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { useDeleteWishlist } from '../hooks/useDeleteWishlist';
const ProdWishlist = ({ product }: any) => {
    const [hover, setHover] = React.useState(false)
    const { mutate } = useDeleteWishlist()
    const router = useRouter()
    const handleDelete = (id: number) => {
        mutate({ id }, {
            onSuccess: (data) => {
                alert(data.message)
            },
            onError: (err: any) => {
                alert(err.response?.data.message || err.message)
            }
        })

    }

    return (
        <div>
            <div onClick={() => { handleDelete(product.id) }} className=' py-2 flex gap-x-1 text-gray-500  items-center hover:text-red-500 cursor-pointer '>
                <X size={20} className='' />
                <p className=' '>Remove</p>
            </div>


            <div className=''>
                <div onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false); }} className='w-60 pb-5 flex flex-col gap-y-2 items-center bg-white px-4 py-2 rounded-2xl'>

                    <div className='hover:cursor-pointer relative h-50 w-full rounded-2xl overflow-hidden'>
                        {product.images && <img onClick={() => { router.push(`/product/${product.id}`) }} src={product.images.mainImage.url} alt="" className='w-full h-full object-cover' />}
                        <button className={`text-white  absolute bottom-0 left-0 w-full h-10 flex items-center justify-center hover:cursor-pointer bg-[#E14A5C] transition duration-300 ease-in-out ${hover ? 'translate-y-0' : 'translate-y-full'}`}>
                            add to cart
                        </button>
                    </div>
                    <p className=' line-clamp-1'>{product.name}</p>
                    <Rating name="read-only" value={product.rate} readOnly />
                    <p>Price: ${product.price}</p>
                </div>


            </div>
        </div >
    )
}

export default ProdWishlist