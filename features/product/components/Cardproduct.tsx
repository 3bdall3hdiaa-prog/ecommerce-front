"use client"
import React from 'react'
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Heart } from 'lucide-react';
import { useCreateWhislist } from '@/features/wishlist/hooks/useCreateWhislist';
import { useAuthStore } from '@/store/authStore';
import { useCreateCartItem } from '@/features/cart/hooks/useCreateCartItem';
const Cardproduct = ({ product, type }: any) => {
    const { user } = useAuthStore()
    const router = useRouter()
    const [hover, setHover] = useState(false)
    const { mutate: mutateCart, isPending } = useCreateCartItem()
    const { mutate, } = useCreateWhislist()
    const handle = (id: number) => {
        if (user.role === "admin") {
            alert("you are admin and you can't add to wishlist")
            return
        }
        if (!user.role) {
            alert("you need to login first")
            return

        }
        mutate({ productId: id }, {
            onSuccess: (data) => {
                alert(data.message)
            },
            onError: (err: any) => {
                alert(err.response?.data.message || err.message)
            },
        })
    }
    const handleaddtocart = (id: number) => {
        if (user.role === 'admin') return
        mutateCart({ productId: id, quantity: 1, userId: user.id }, {
            onSuccess: (data) => {
                alert(data.message)
            },
            onError: (err: any) => {
                alert(err.response?.data.message || err.message)
            },
        })
    }
    return (

        <div key={product.id} onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false); }} className='  flex flex-col gap-y-2 items-center bg-white px-1 lg:px-4 py-2 rounded-2xl'>

            <div className='hover:cursor-pointer relative h-40 md:h-50 w-full rounded-2xl overflow-hidden'>
                {product.images && <img onClick={() => { router.push(`/product/${product.id}`) }} src={product.images.mainImage.url} alt="" className='w-full h-full object-contain' />}
                <button disabled={isPending || product.stock === 0} className={`${isPending || product.stock === 0 ? "cursor-not-allowed" : "cursor-pointer"} text-white  absolute bottom-0 left-0 w-full h-10 flex items-center justify-center hover:opacity-50  bg-[#E14A5C]  transition-all ease-in-out duration-300 ${hover ? "opacity-90 translate-y-0" : "opacity-0 translate-y-full"}`} onClick={() => { handleaddtocart(product.id) }} >add to cart</button>
                {type !== "wishlist" && <Heart onClick={() => { handle(product.id) }} className={`absolute top-5 hover:text-red-400 cursor-pointer right-3 ${hover ? "opacity-100 translate-y-0 transition-all duration-200" : "opacity-0"}`} />}
                {product.discount > 0 &&

                    <div className='text-xs absolute 
                    top-[1px] left-2
                    sm:top-3 sm:left-6 
                    md:top-[1px] md:left-2
                    lg:top-1 lg:left-0

                     bg-[#8CBC67] text-white px-2 py-1 rounded-full '>
                        -{product.discount}%
                    </div>
                }

            </div>
            <div className='text-center'>
                <p className='text-center line-clamp-1'>{product.name}</p>
                <p className='text-gray-400 capitalize'>{product.subsubcategory?.name}</p>
            </div>
            <Rating
                name="read-only"

                size="small"
                value={product.ratings}
                readOnly
            />
            <div className='flex gap-x-2'>
                {!product.discount ? <p className='text-[#E14A5C]' >${product.price} </p> : <p className='text-[#E14A5C]'>${product.priceAfterDiscount} <span className='text-gray-400 line-through'>${product.price}</span></p>}
            </div>
        </div >


    )
}

export default Cardproduct