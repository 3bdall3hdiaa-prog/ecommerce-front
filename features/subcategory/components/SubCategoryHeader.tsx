import React from 'react'
import Link from 'next/link'
import { SubCategoryResponse } from '../types/subcategory.types'

const SubCategoryHeader = ({ subCategory }: { subCategory: SubCategoryResponse }) => {
    return (
        <div className='space-y-4'>
            <p className='text-3xl font-semibold  capitalize'>{subCategory?.name}</p>
            <ul className='flex gap-x-2 text-md'>
                <li className='hover:text-black text-gray-500'><Link href="/">Home</Link></li>/
                <li className='hover:text-black text-gray-500 capitalize'><Link href={`/product-category/${subCategory.category?.name}`}>{subCategory.category?.name}</Link></li>/
                <li className='capitalize font-semibold'>{subCategory?.name}</li>
            </ul>
        </div>
    )
}

export default SubCategoryHeader