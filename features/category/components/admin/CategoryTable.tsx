import React from 'react'
import CategoryRow from '@/features/category/components/admin/CategoryRow'
import { CategoryResponse } from '../../types/category.types'
interface Props {
    myCategories: CategoryResponse[],
    handleSetCurrCategory: any,
    setIsOpen: any,
    isLoading: boolean
}
const CategoryTable = ({ myCategories, handleSetCurrCategory, setIsOpen }: Props) => {
    return (
        <>
            <div className='flex justify-between items-center mb-4'>
                <p className='text-xl font-bold'>Manage Categoryies</p>
                <button onClick={() => setIsOpen(true)} className='cursor-pointer bg-[#E14A5C] hover:opacity-60 text-white px-4 py-2 rounded-md'>
                    Add Category
                </button>
            </div>

            <div className='overflow-x-auto mt-5'>

                <table className='w-full table-fixed'>
                    <thead>
                        <tr className='border-b border-gray-300 text-center uppercase'>
                            <th className='w-30'>ID</th>
                            <th className='w-30'>Category</th>
                            <th className='w-30'>Icon</th>
                            <th className='w-30'>Image</th>
                            <th className='w-30'>Slug</th>
                            <th className='w-24'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {myCategories.length === 0 ?
                            <tr>
                                <td colSpan={5} className='text-center py-4'>No Categories found</td>
                            </tr>
                            :
                            myCategories.map((category: CategoryResponse) => (
                                <CategoryRow key={category.id} category={category} handleSetCurrCategory={handleSetCurrCategory} />
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default CategoryTable