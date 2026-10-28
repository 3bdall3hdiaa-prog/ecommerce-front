import { productResponse } from '@/features/product/types/Product'
import React from 'react'
import { SubCategoryResponse } from '../types/subcategory.types'

const ProductsToolBar = ({ products, subCategory }: { products: productResponse[], subCategory: SubCategoryResponse }) => {
    return (
        <div className='flex items-center justify-between'>
            <p className='text-gray-500'>Showing all {products.length} results for "{subCategory?.name}"</p>

        </div>
    )
}

export default ProductsToolBar