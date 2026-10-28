"use client"
import React, { useState } from 'react'
import { useUpdateSubSubCategory } from '../../hooks/useUpdateSubSubCategory'
import { SubCategoryResponse } from '@/features/subcategory/types/subcategory.types'
interface Props {
    subcategories: SubCategoryResponse[]
    isEditOpen: boolean
    setIsEditOpen: (isEditOpen: boolean) => void
    currSubSubCategory: SubCategoryResponse
    setCurrSubSubCategory: any
}
const EditSubSubCategory = ({ subcategories, isEditOpen, setIsEditOpen, currSubSubCategory, setCurrSubSubCategory }: any) => {
    const { mutate, isPending } = useUpdateSubSubCategory()
    const [mySubCategories, setMySubCategories] = useState<any>([])
    const handleEdit = () => {
        mutate({ id: currSubSubCategory.id, data: currSubSubCategory }, {
            onSuccess: () => {
                alert("SubSubCategory updated successfully")
                setIsEditOpen(false)
            },
            onError: (err: any) => {
                alert(err.response?.data.message || err.message)
            }
        })
    }

    return (
        <>
            {isEditOpen && (
                <div onClick={() => setIsEditOpen(false)} className='fixed inset-0 bg-black/50 flex items-center justify-center z-999'>
                    <div className='bg-white p-6 rounded-md w-96' onClick={(e) => e.stopPropagation()}>
                        <h2 className='text-lg font-bold mb-4'>Edit SubCategory</h2>
                        <form onSubmit={(e) => { e.preventDefault(); handleEdit() }}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    onChange={(e) => setCurrSubSubCategory({ ...currSubSubCategory, name: e.target.value })}
                                    value={currSubSubCategory.name}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Enter subsubcategory name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="Slug">
                                    Slug
                                </label>
                                <input
                                    onChange={(e) => setCurrSubSubCategory({ ...currSubSubCategory, slug: e.target.value })}
                                    value={currSubSubCategory.slug}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Slug"
                                    type="text"
                                    placeholder="Enter Subcategory name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="icon">
                                    Image
                                </label>
                                <input
                                    onChange={(e) => setCurrSubSubCategory({ ...currSubSubCategory, file: e.target.files?.[0] })}

                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="image"
                                    type="file"
                                    placeholder="Upload Image"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="icon">
                                    SubCategory
                                </label>
                                <select value={currSubSubCategory.subcategoryId} onChange={(e) => setCurrSubSubCategory({ ...currSubSubCategory, subcategoryId: e.target.value })} className='shadow  rounded py-2 px-3 border-1 border-black w-full ' >
                                    <option value="" disabled>Select SubCategory</option>
                                    {subcategories.map((subsubCategory: any) => (
                                        <option key={subsubCategory.id} value={subsubCategory.id}>
                                            {subsubCategory.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                disabled={isPending}
                                className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isPending ? "cursor-not-allowed opacity-50 " : ""}`}
                                type="submit"
                            >
                                {isPending ? "Updating..." : "Update"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default EditSubSubCategory