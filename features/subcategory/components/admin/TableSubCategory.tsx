import React from 'react'
import SubCategoryRow from './SubCategoryRow'
import { SubCategoryResponse } from '../../types/subcategory.types'
interface Props {
    mysubCategories: SubCategoryResponse[]
    handleSetCurrentSubCategory: (subcategory: SubCategoryResponse, typeAction: string) => void
    setIsOpen: any
}
const TableSubCategory = ({ mysubCategories, handleSetCurrentSubCategory, setIsOpen }: Props) => {
    return (
        <>
            <div className='flex justify-between items-center mb-4'>
                <p className='text-xl font-bold'>Manage SubCategories</p>
                <button onClick={() => setIsOpen(true)} className='cursor-pointer bg-[#E14A5C] hover:opacity-60 text-white px-4 py-2 rounded-md'>
                    Add SubCategory
                </button>
            </div>

            <div className='overflow-x-auto mt-5'>
                <table className='w-full table-fixed'>
                    <thead>
                        <tr className='border-b border-gray-300 text-center uppercase'>
                            <th className='w-30'>id</th>
                            <th className='w-30'>Subcategory</th>
                            <th className='w-30'>Slug</th>
                            <th className='w-30'>Category</th>
                            <th className='w-30'>Image</th>
                            <th className='w-24'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {mysubCategories.length === 0 ? (
                            <tr>
                                <td colSpan={6} className='text-center py-4'>No SubCategories found</td>
                            </tr>
                        ) :
                            mysubCategories.map((subcategory: any) => (
                                <SubCategoryRow key={subcategory.id} subcategory={subcategory} handleSetCurrentSubCategory={handleSetCurrentSubCategory} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableSubCategory