"use client"
import React from 'react'
import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'
const Logo = () => {
    const router = useRouter()
    return (
        <div onClick={() => { router.push("/") }} className='flex items-center hover:cursor-pointer'>
            <ShoppingBag size={40} className=' text-[#661B9E]' />
            <p className='text-white text-4xl lowercase mb-2 ml-2'>Market<span className='text-[#661B9E]'>.</span></p>
        </div>
    )
}

export default Logo

