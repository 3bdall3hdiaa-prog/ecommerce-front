import React from 'react'
import SubSubCategoryRow from './SubSubCategoryRow'
import { SubsubcategoryResponse } from '../../types/subsubcategory';
interface Props {
    mysubsubCategories: SubsubcategoryResponse[];
    setIsOpen: (isOpen: boolean) => void;
    isLoading: boolean;
    isError: boolean;
    handleOpen: (subsubcategory: SubsubcategoryResponse, action: string) => void;
}
const TableSubSubCategory = ({ handleOpen, mysubsubCategories, setIsOpen, isLoading, isError }: Props) => {

    return (
        <>
            <div className='flex justify-between items-center mb-4'>
                <p className='text-xl font-bold'>Manage SubSubCategories</p>
                <button onClick={() => setIsOpen(true)} className='cursor-pointer bg-[#E14A5C] hover:opacity-60 text-white px-4 py-2 rounded-md'>
                    Add SubSubCategory
                </button>
            </div>

            <div className='overflow-x-auto mt-5'>
                <table className='w-full table-fixed'>
                    <thead>
                        <tr className='border-b border-gray-300 text-center uppercase'>
                            <th className='w-30'>id</th>
                            <th className='w-30'>SubSubcategory</th>
                            <th className='w-30'>slug</th>
                            <th className='w-30'>SubCategory</th>
                            <th className='w-30'>Image</th>
                            <th className='w-24'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {mysubsubCategories.length === 0 ? (
                            <tr>
                                <td colSpan={6} className='text-center py-4'>No SubSubCategories found</td>
                            </tr>
                        ) :
                            mysubsubCategories.map((subsubcategory: any) => (
                                <SubSubCategoryRow handleOpen={handleOpen} key={subsubcategory.id} subsubcategory={subsubcategory} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableSubSubCategory