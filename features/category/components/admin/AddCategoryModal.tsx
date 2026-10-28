"use client"
import React from 'react'
import { useCreateCategory } from '../../hooks/useCreateCategory'
import { useEffect, useState } from 'react'
import { CategoryForm } from '../../types/category.types'

const AddCategoryModal = ({ isOpen, setIsOpen, setMessage }: { isOpen: boolean, setIsOpen: any, setMessage: any }) => {
    const { mutate, isPending, data } = useCreateCategory()
    const [newCategory, setNewCategory] = useState<CategoryForm>({
        name: "",
        icon: "",
        slug: "",
        file: null
    })
    const handleadd = () => {
        mutate({ newCategory }, {
            onSuccess: (data) => {
                setMessage({ message: data.message, type: "success" })
                setIsOpen(false)
                setNewCategory({ name: "", icon: "", slug: "", file: null })
            },
            onError: (err) => {
                setMessage({ message: err.response?.data.message || err.message, type: "error" })
            }
        });
    }



    return (
        <>
            {isOpen && (
                <div onClick={() => setIsOpen(false)} className='fixed inset-0 bg-black/50 flex items-center justify-center z-999'>
                    <div className='bg-white p-6 rounded-md w-96' onClick={(e) => e.stopPropagation()}>
                        <h2 className='text-lg font-bold mb-4'>Add Category</h2>
                        <form onSubmit={(e) => { e.preventDefault(); handleadd() }}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                                    value={newCategory.name}
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
                                    onChange={(e) => setNewCategory({ ...newCategory, slug: e.target.value })}
                                    value={newCategory.slug}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="slug"
                                    type="text"
                                    placeholder="Enter category slug"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="file"
                                    className="flex items-center justify-center w-full h-32 px-4 
                   border-2 border-dashed border-gray-300 rounded-xl
                   cursor-pointer bg-gray-50
                   hover:bg-gray-100 hover:border-red-400
                   transition-all duration-200"
                                >
                                    <div className="text-center">
                                        <svg
                                            className="w-8 h-8 mx-auto mb-2 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                            />
                                        </svg>

                                        <p className="text-sm text-gray-600">
                                            Upload Image
                                        </p>

                                        <p className="text-xs text-gray-400 mt-1">
                                            PNG, JPG أو JPEG
                                        </p>
                                    </div>
                                </label>

                                <input

                                    onChange={(e) => setNewCategory({ ...newCategory, file: e.target.files?.[0] || null })}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hidden"
                                    id="file"
                                    type="file"
                                    placeholder="Upload Image"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="icon">
                                    Icon
                                </label>
                                <input
                                    onChange={(e) => setNewCategory({ ...newCategory, icon: e.target.value })}
                                    value={newCategory.icon}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="icon"
                                    type="text"
                                    placeholder="Enter category icon url"
                                />                            </div>
                            <button

                                className={` bg-[#E14A5C] hover:opacity-60 transition duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                type="submit"
                                disabled={isPending}
                            >
                                {isPending ? 'Adding...' : 'Add Category'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>

    )
}

export default AddCategoryModal