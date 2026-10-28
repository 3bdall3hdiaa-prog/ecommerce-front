import React from 'react'
import { useUpdateCategory } from '../../hooks/useUpdateCategory'
import { CategoryResponse } from '../../types/category.types'
interface Props {
    isEditOpen: boolean
    setIsEditOpen: any
    currcategory: CategoryResponse,
    setCurrCategory: any,
    setMessage: any
}
const EditCategoryModal = ({ isEditOpen, setIsEditOpen, currcategory, setCurrCategory, setMessage }: Props) => {
    const { mutate, isPending } = useUpdateCategory()
    const confirmedit = () => {
        mutate({ category: currcategory }, {
            onSuccess: (data) => {
                setMessage({ message: data.message, type: "success" })
                setIsEditOpen(false)
            },
            onError: (err) => {
                setMessage({ message: err.response?.data.message || err.message, type: "error" })
            }
        })
    }
    return (
        <>
            {isEditOpen && (
                <div onClick={() => setIsEditOpen(false)} className='fixed inset-0 bg-black/50 flex items-center justify-center z-999'>
                    <div className='bg-white p-6 rounded-md w-96' onClick={(e) => e.stopPropagation()}>
                        <h2 className='text-lg font-bold mb-4'>Edit Category</h2>
                        <form onSubmit={(e) => { e.preventDefault(); confirmedit() }}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    onChange={(e) => setCurrCategory({ ...currcategory, name: e.target.value })}
                                    value={currcategory.name}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Enter category name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="slug">
                                    Slug
                                </label>
                                <input
                                    onChange={(e) => setCurrCategory({ ...currcategory, slug: e.target.value })}
                                    value={currcategory.slug}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="slug"
                                    type="text"
                                    placeholder="Enter category slug"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="icon">
                                    Icon
                                </label>
                                <input
                                    onChange={(e) => setCurrCategory({ ...currcategory, icon: e.target.value })}
                                    value={currcategory.icon}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="icon"
                                    type="text"
                                    placeholder="Enter category icon "
                                />
                            </div>
                            <button
                                disabled={isPending}
                                className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
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

export default EditCategoryModal