import { productResponse } from '@/features/product/types/Product'
import React from 'react'

const ProductsToolBar = ({ products, sort, setSort }: { products: productResponse[], sort: string, setSort: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <div className='flex items-center justify-between'>
            <p className='text-gray-500'>Showing all {products.length} results for "{products[0]?.subsubcategory?.name}"</p>

        </div>
    )
}

export default ProductsToolBar