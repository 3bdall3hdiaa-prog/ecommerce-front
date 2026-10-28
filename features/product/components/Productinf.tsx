import React from 'react'
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import { productResponse } from '../types/Product';
interface Props {
    product: productResponse,
    quantity: number,
    setQuantity: React.Dispatch<React.SetStateAction<number>>,
    handleAddToCart: (id: number) => void
}
const ProductInf = ({ product, quantity, setQuantity, handleAddToCart }: Props) => {
    return (

        <div className=' lg:col-span-4 col-span-1 flex flex-col gap-y-4'>
            <p className='text-5xl'>{product.name}</p>
            <p className='text-6xl text-[#E14A5C]'>${product.priceAfterDiscount}</p>
            {/* <Rating name="read-only" value={p} readOnly /> */}
            <div className='flex justify-between items-center my-2'>
                <Rating name="read-only" size={"large"} value={product.ratings} readOnly />

                <p className={`font-medium ${product.stock > 0
                    ? product.stock < 5
                        ? 'text-amber-600'
                        : 'text-emerald-600'
                    : 'text-red-600'
                    }`}>
                    {product.stock > 0
                        ? `Availability: In Stock (${product.stock})`
                        : 'Availability: Out of Stock'
                    }
                </p>
            </div>
            <p className='text-gray-500 break-all'>{product.description}</p>
            <div className=' flex  items-center justify-between'>
                <div className=" flex items-center w-32 h-10 bg-gray-100 border border-gray-300 rounded-full overflow-hidden">
                    {/* زر الناقص */}
                    <button
                        className="cursor-pointer flex-1 h-full flex items-center justify-center text-gray-600 hover:bg-red-500 hover:text-white transition-colors duration-200 text-lg font-bold"
                        onClick={() => {
                            if (quantity === 1) return
                            setQuantity((quantity) => quantity - 1)
                        }}
                    >
                        −
                    </button>


                    <input
                        type="text"
                        value={quantity}
                        readOnly
                        className="w-10 h-full text-center bg-transparent border-x border-gray-300 text-sm font-semibold focus:outline-none"
                    />

                    <button
                        className="cursor-pointer flex-1 h-full flex items-center justify-center text-gray-600 hover:bg-red-500 hover:text-white transition-colors duration-200 text-lg font-bold"
                        onClick={() => {
                            if (quantity === product.stock) return
                            setQuantity((quantity) => quantity + 1)
                        }}
                    >
                        +
                    </button>
                </div>
                <button disabled={product.stock === 0} onClick={() => handleAddToCart(product.id)} className={`${product.stock === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-60'} text-lg   transition px-4 py-2 bg-[#E14A5C] rounded-full text-white`}>add to cart</button>
            </div>
            <hr className='text-gray-200 py-2'></hr>
        </div>

    )
}

export default ProductInf