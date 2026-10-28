import React from 'react'
import { useUpdataSubCategory } from '@/features/subcategory/hooks/useUpdateSubCategory'
import { SubCategoryResponse } from '../../types/subcategory.types'
interface Props {
    isEditOpen: boolean,
    setIsEditOpen: any,
    currSubCategory: SubCategoryResponse,
    setCurrSubCategory: any,
    categories: any
}
const EditSubCategoryModal = ({ categories, isEditOpen, setIsEditOpen, currSubCategory, setCurrSubCategory }: Props) => {
    const { mutate, isPending } = useUpdataSubCategory()
    const handleEdit = () => {
        mutate({ id: currSubCategory.id, subCategory: currSubCategory }, {
            onSuccess: () => {
                alert("SubCategory updated successfully")
                setIsEditOpen(false)

                // window.location.reload()
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
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    onChange={(e) => setCurrSubCategory({ ...currSubCategory, name: e.target.value })}
                                    value={currSubCategory.name}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Enter subcategory name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="slug">
                                    Slug
                                </label>
                                <input
                                    onChange={(e) => setCurrSubCategory({ ...currSubCategory, slug: e.target.value })}
                                    value={currSubCategory.slug}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="slug"
                                    type="text"
                                    placeholder="Enter subcategory slug"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="icon">
                                    Image
                                </label>
                                <input
                                    onChange={(e) => setCurrSubCategory({ ...currSubCategory, file: e.target.files?.[0] || null })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="icon"
                                    type="file"
                                    placeholder="Enter subcategory Image"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="icon">
                                    Category
                                </label>
                                <select
                                    onChange={(e) => setCurrSubCategory({ ...currSubCategory, categoryId: e.target.value })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="icon"
                                >
                                    <option value="">Select Category</option>
                                    {categories.map((category: any) => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                            </div>
                            <button
                                disabled={isPending}
                                onClick={handleEdit}
                                className={`${isPending ? " cursor-not-allowed" : "cursor-pointer"} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                                type="submit"
                            >
                                Edit SubCategory
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>

    )
}

export default EditSubCategoryModal