"use client"
import React from 'react'
import Link from 'next/link'

const CategoryItem = ({ category }: any) => {
    return (
        <div className={` py-4`}>
            <Link href={`/product-category/${category.name}`} className={`text-white  flex items-center group gap-x-2 `}>
                <img className='w-5 h-5' src={category.icon} loading='lazy' alt="" />
                <span className='group-hover:text-white/50  transition duration-300 capitalize '>{category.name}</span>

            </Link>

        </div>
    )
}

export default CategoryItem