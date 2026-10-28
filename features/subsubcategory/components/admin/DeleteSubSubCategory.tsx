import React from 'react'
import { useDeleteSubSubCategory } from '../../hooks/useDeleteSubSubCategory'

const DeleteSubSubCategory = ({ currSubSubCategory, isDeleteOpen, setIsDeleteOpen }: any) => {
    const { mutate, isPending } = useDeleteSubSubCategory()

    const handleDelete = () => {
        mutate({ id: currSubSubCategory.id }, {
            onSuccess: (data) => {
                alert(data.message)
                setIsDeleteOpen(false)
            },
            onError: (err: any) => {
                alert(err.response?.data.message || err.message)
            }
        })

    }
    return (
        <>
            {isDeleteOpen && (
                <div onClick={() => setIsDeleteOpen(false)} className='fixed inset-0 bg-black/50 flex items-center justify-center z-999'>
                    <div className='bg-white p-6 rounded-md w-96' onClick={(e) => e.stopPropagation()}>
                        <h2 className='text-lg font-bold mb-4'>Delete SubCategory</h2>
                        <p>Are you sure you want to delete this subsubcategory?</p>
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
                                onClick={handleDelete}
                                className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default DeleteSubSubCategory