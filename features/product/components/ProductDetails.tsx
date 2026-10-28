"use client"
import React from 'react'
import ProductInf from './Productinf';
import ShipingDelivery from './ShippingDelivery';
import Slider from '../../../components/ui/Slider';
import { productResponse } from '../types/Product';
interface Props {
    product: productResponse,
    quantity: number,
    setQuantity: React.Dispatch<React.SetStateAction<number>>,
    handleAddToCart: (id: number) => void
}
const ProductDetails = ({ product, quantity, setQuantity, handleAddToCart }: Props) => {
    return (
        <div className='w-full grid lg:grid-cols-11 grid-cols-1 gap-x-2'>
            {/*swipper */}
            <div className='lg:col-span-4  col-span-1 '>
                <Slider product={product} />
            </div>
            <ProductInf handleAddToCart={handleAddToCart} quantity={quantity} setQuantity={setQuantity} product={product} />
            <ShipingDelivery />


        </div>
    )
}

export default ProductDetails