import React from 'react'
import { Pencil, Trash, ShoppingCart, Shirt } from 'lucide-react'
import { CategoryResponse } from '../../types/category.types'

interface Props {
    category: CategoryResponse,
    handleSetCurrCategory: (category: CategoryResponse, typeAction: string) => void
}

const CategoryRow = ({ category, handleSetCurrCategory }: Props) => {

    const iconMap: Record<string, any> = {
        ShoppingCart: ShoppingCart,
        Shirt: Shirt
    }
    const Icon = iconMap[category.icon]
    return (
        <tr key={category.id} className='border-b border-gray-300'>
            <td className='text-center py-4'>{category.id}</td>
            <td className='text-center'>{category.name}</td>
            <td className="">
                <div className="flex items-center justify-center">
                    <img src={category.icon} alt={category.name} className='w-8 h-8 object-cover rounded mx-auto' />
                </div>
            </td>
            <td className="">
                <div className="flex items-center justify-center">
                    {category.image && <img src={category.image.url} alt={category.name} className='w-8 h-8 object-cover rounded mx-auto' />}
                </div>
            </td>
            <td className='text-center'>{category.slug}</td>
            <td >
                <div className='flex items-center justify-center gap-x-4'>
                    <Pencil
                        onClick={() => { handleSetCurrCategory(category, "edit") }}
                        className='text-blue-300 hover:text-blue-500 cursor-pointer'
                    />
                    <Trash onClick={() => { handleSetCurrCategory(category, "delete") }} className='text-red-300 hover:text-red-500 cursor-pointer' />
                </div>
            </td>
        </tr>)
}

export default CategoryRow