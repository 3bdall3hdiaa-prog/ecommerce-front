import React from 'react'
import { Pencil, Trash, ShoppingCart, Shirt } from 'lucide-react'
import { SubsubcategoryResponse } from '../../types/subsubcategory'
interface Props {
    subsubcategory: SubsubcategoryResponse
    handleOpen: (subsubcategory: any, action: string) => void
}
const SubSubCategoryRow = ({ subsubcategory, handleOpen }: Props) => {


    return (
        <tr key={subsubcategory.id} className='border-b border-gray-300'>
            <td className='text-center py-4'>{subsubcategory.id}</td>
            <td className='text-center'>{subsubcategory.name}</td>
            <td className='text-center'>{subsubcategory.slug}</td>
            <td className='text-center'> {subsubcategory.subcategory.name}</td>
            <td className="py-2">
                <img
                    src={subsubcategory.image.url}
                    alt={subsubcategory.name}
                    className='w-14 h-14 object-cover rounded mx-auto'
                />
            </td>
            <td >
                <div className='flex items-center justify-center gap-x-4'>
                    <Pencil
                        onClick={() => handleOpen(subsubcategory, "edit")}
                        className='text-blue-300 hover:text-blue-500 cursor-pointer'
                    />
                    <Trash onClick={() => handleOpen(subsubcategory, "delete")} className='text-red-300 hover:text-red-500 cursor-pointer' />
                </div>
            </td>
        </tr>)
}

export default SubSubCategoryRow