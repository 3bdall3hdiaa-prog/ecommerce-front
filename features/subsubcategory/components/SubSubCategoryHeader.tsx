import React from 'react'
import Link from 'next/link'
import { productResponse } from '@/features/product/types/Product'
const SubSubCategoryHeader = ({ product }: { product: productResponse }) => {
    return (
        <>
            {product && (<div className='space-y-4'>
                <p className='text-4xl font-semibold  capitalize'>{product.subsubcategory.name}</p>
                <ul className='flex gap-x-2 '>
                    <li className='hover:text-black text-gray-500'><Link href="/">Home</Link></li>/
                    <li className='hover:text-black text-gray-500 capitalize'><Link href={`/product-category/${product?.subsubcategory?.subcategory?.category?.name}`}>{product?.subsubcategory?.subcategory?.category?.name}</Link></li>/
                    <li className='hover:text-black text-gray-500 capitalize'><Link href={`/product-category/${product?.subsubcategory?.subcategory?.category?.name}/${product?.subsubcategory?.subcategory?.name}`}>{product?.subsubcategory?.subcategory?.name}</Link></li>/
                    <li className='capitalize'>{product?.subsubcategory?.name}</li>
                </ul>
            </div>)}
        </>
    )
}

export default SubSubCategoryHeader