import React from 'react'
import { Pencil, Trash } from 'lucide-react'
import { SubCategoryResponse } from '../../types/subcategory.types'
interface Props {
    subcategory: SubCategoryResponse,
    handleSetCurrentSubCategory: (subcategory: SubCategoryResponse, typeAction: string) => void
}
const SubCategoryRow = ({ subcategory, handleSetCurrentSubCategory }: Props) => {


    return (
        <tr key={subcategory.id} className='border-b border-gray-300'>
            <td className='text-center py-4'>{subcategory.id}</td>
            <td className='text-center'>{subcategory.name}</td>
            <td className='text-center'>{subcategory.slug}</td>
            <td className='text-center'> {subcategory.category.name}</td>
            <td className="py-2">
                <img
                    src={subcategory.image.url}
                    alt={subcategory.name}
                    className='w-14 h-14 object-cover rounded mx-auto'
                />
            </td>
            <td >
                <div className='flex items-center justify-center gap-x-4'>
                    <Pencil
                        onClick={() => handleSetCurrentSubCategory(subcategory, "edit")}
                        className='text-blue-300 hover:text-blue-500 cursor-pointer'
                    />
                    <Trash onClick={() => handleSetCurrentSubCategory(subcategory, "delete")} className='text-red-300 hover:text-red-500 cursor-pointer' />
                </div>
            </td>
        </tr>)
}

export default SubCategoryRow