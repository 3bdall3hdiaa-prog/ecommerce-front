import React, { useEffect } from 'react'
import { useDeleteCategory } from '../../hooks/useDeleteCategory'
import { useAuthStore } from '@/store/authStore'
import { CategoryResponse } from '../../types/category.types'
interface Props {
    isDeleteOpen: boolean
    setIsDeleteOpen: any
    currCategory: CategoryResponse
    setMessage: any
}
const DeleteCategoryModal = ({ isDeleteOpen, setIsDeleteOpen, currCategory, setMessage }: Props) => {
    const { mutate, isPending, data } = useDeleteCategory()
    const confirmdelete = () => {

        mutate({ id: currCategory.id }, {
            onSuccess: (data) => {
                setIsDeleteOpen(false)
                setMessage({ message: data.message, type: "success" })
            },
            onError: (err) => {
                setMessage({ message: err.response?.data.message || err.message, type: "error" })
            }
        })

    }


    return (
        <>
            {isDeleteOpen && (
                <div onClick={() => setIsDeleteOpen(false)} className='fixed inset-0 bg-black/50 flex items-center justify-center z-999'>
                    <div className='bg-white p-6 rounded-md w-96' onClick={(e) => e.stopPropagation()}>
                        <h2 className='text-lg font-bold mb-4'>Delete Category</h2>
                        <p>Are you sure you want to delete this category?</p>
                        <div className='flex justify-end gap-4 mt-4'>
                            <button
                                onClick={() => setIsDeleteOpen(false)}
                                className="cursor-pointer bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Cancel
                            </button>
                            <button
                                disabled={isPending}
                                onClick={confirmdelete}
                                className={` ${isPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                                type="submit"
                            >
                                {isPending ? "Deleting..." : "Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default DeleteCategoryModal