import React from 'react'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import { X } from 'lucide-react';
import { useGetWishlist } from '../hooks/useGetWishlists'
import { useDeleteWishlist } from '../hooks/useDeleteWishlist'
import Cardproduct from '@/features/product/components/Cardproduct';
const WishlistContainer = () => {
    const { data, isLoading } = useGetWishlist()

    const { mutate } = useDeleteWishlist()
    const handleDelete = (id: number) => {
        mutate({ id }, {
            onSuccess: (data) => {
                alert(data.message)
                window.location.reload()
            },
            onError: (err: any) => {
                alert(err.response?.data.message || err.message)
            }
        })

    }
    if (isLoading) return <p>Loading...</p>
    const products = data?.wishlistItems ?? []
    return (
        <div className=''>
            <div className=' pb-3 pl-3 border-b border-gray-300'>
                <p className='text-xl uppercase'>Your products wishlist</p>
            </div>
            {products.length === 0 ? (
                <div className=' w-full flex flex-col items-center  gap-y-4  '>

                    <Heart size={"100"} className='text-gray-200 ' />
                    <p className='text-3xl font-semibold '>Your wishlist is empty</p>
                    <div className='flex flex-col items-center' >
                        <p className='  text-gray-500 '>You don't have any products in the wishlist yet. You will find a lot of </p>
                        <p className='text-gray-500 '>interesting products on our "Shop" page.</p>
                    </div>
                    <Link href={'/'} className='bg-[#E14A5C] text-white px-4 py-2 rounded-lg'>Go to shop</Link>


                </div>
            ) :
                isLoading ? <p className='text-center text-gray-400'>Loading...</p> :
                    (
                        <div className='grid grid-cols-4 gap-4'>
                            {products.map((el: any) => (
                                <div>
                                    <div onClick={() => { handleDelete(el.product.id) }} className=' py-2 flex gap-x-1 text-gray-500  items-center hover:text-red-500 cursor-pointer '>
                                        <X size={20} className='' />
                                        <p className=' '>Remove</p>
                                    </div>
                                    <Cardproduct type='wishlist' key={el.id} product={el.product} />
                                </div>
                            ))}
                        </div>

                    )
            }


        </div >
    )
}

export default WishlistContainer