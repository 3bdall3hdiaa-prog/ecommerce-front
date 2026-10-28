import React from 'react'
import { Package, PackageCheck, PackageX, DollarSign } from 'lucide-react';
import { productResponse } from '../../types/Product';
interface Props {
    myProducts: productResponse[]
}
const ProductStats = ({ myProducts }: Props) => {
    return (
        <div className='grid grid-cols-4 gap-4 mb-6'>
            <div className='bg-white p-4 rounded-md shadow flex flex-col justify-center gap-y-2'>
                <div className='flex items-center gap-x-2'>
                    <Package className='text-gray-400' size={20} />
                    <p className='text-sm text-gray-500'>Total Products</p>
                </div>
                <p className='text-3xl font-semibold'>{myProducts.length}</p>
            </div>

            <div className='bg-white p-4 rounded-md shadow flex flex-col justify-center gap-y-2'>
                <div className='flex items-center gap-x-2'>
                    <PackageCheck className='text-green-500' size={20} />
                    <p className='text-sm text-gray-500'>In Stock</p>
                </div>
                <p className='text-3xl font-semibold'>
                    {myProducts.filter((p: any) => p.stock > 0).length}
                </p>
            </div>

            <div className='bg-white p-4 rounded-md shadow flex flex-col justify-center gap-y-2'>
                <div className='flex items-center gap-x-2'>
                    <PackageX className='text-red-400' size={20} />
                    <p className='text-sm text-gray-500'>Out of Stock</p>
                </div>
                <p className='text-3xl font-semibold'>
                    {myProducts.filter((p: any) => p.stock === 0).length}
                </p>
            </div>

            <div className='bg-white p-4 rounded-md shadow flex flex-col justify-center gap-y-2'>
                <div className='flex items-center gap-x-2'>
                    <DollarSign className='text-yellow-500' size={20} />
                    <p className='text-sm text-gray-500'>Total Value</p>
                </div>
                <p className='text-3xl font-semibold'>
                    ${myProducts.reduce((sum: number, p: any) => sum + ((p.discount ? p.priceAfterDiscount : p.price) * p.stock), 0).toLocaleString()}
                </p>
            </div>
        </div>

    )
}

export default ProductStats