'use client'
import React from 'react'
import { X } from 'lucide-react'
import { useUpdateCartItems } from '../hooks/useUpdateCartItem'
import { cartItem } from '../types/cart.types'
const Tr = ({ cartItem, handleDelete }: { cartItem: cartItem, handleDelete: (id: number) => void }) => {
    const product = cartItem.product
    const [quantity, setQuantity] = React.useState(cartItem.quantity);
    const { mutate } = useUpdateCartItems()
    React.useEffect(() => {
        mutate({ id: cartItem.id, quantity: quantity })
    }, [quantity])
    return (

        <tr key={product.id} className='text-center  border-b-2 border-gray-200'>
            <td className='p-3  w-1/2'>
                <div className=' flex gap-x-10 items-center    '>

                    <X onClick={() => { handleDelete(cartItem.id) }} color='black' size={30} className='rounded-full p-2 cursor-pointer hover:bg-gray-300' />
                    {/*box of image */}
                    <div className='w-20 h-20 overflow-hidden rounded-2xl'>
                        <img className='object-cover w-full h-full' src={product.images.mainImage.url} alt='' />
                    </div>
                    <p className='font-normal text-lg'>{product.name}</p>

                </div>
            </td>
            <td>{cartItem.price}</td>
            <td className=' '>
                <div className='flex items-center justify-center'>

                    <div className={` flex items-center w-32 h-10 bg-gray-100 border border-gray-300 rounded-full overflow-hidden`}>
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

                        {/* حقل الرقم */}
                        <input
                            type="text"
                            value={quantity}
                            readOnly
                            className="w-10 h-full text-center bg-transparent border-x border-gray-300 text-sm font-semibold focus:outline-none"
                        />

                        {/* زر الزائد */}
                        <button
                            className="cursor-pointer flex-1 h-full flex items-center justify-center text-gray-600 hover:bg-red-500 hover:text-white transition-colors duration-200 text-lg font-bold"
                            onClick={() => {
                                if (quantity >= cartItem.quantity) return
                                setQuantity((quantity) => quantity + 1)
                            }}
                        >
                            +
                        </button>
                    </div>
                </div>
            </td>
            <td>{(product.priceAfterDiscount * cartItem.quantity)}</td>
        </tr>
    )
}

export default Tr