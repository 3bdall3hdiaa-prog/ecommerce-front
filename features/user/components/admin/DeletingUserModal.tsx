import React from 'react'
import { UserResponse } from '../../types/user.types'
interface Props {
    currUser: UserResponse
    isDeleteOpen: boolean
    setIsDeleteOpen: (isOpen: boolean) => void
    handleDeleteUser: (user: UserResponse) => void
    isDeleting: boolean
}
const DeletingUserModal = ({ currUser, isDeleteOpen, setIsDeleteOpen, handleDeleteUser, isDeleting }: Props) => {
    return (
        <>
            {isDeleteOpen && (
                <div onClick={() => setIsDeleteOpen(false)} className='fixed inset-0 bg-black/50 flex items-center justify-center z-999'>
                    <div className='bg-white p-6 rounded-md w-96' onClick={(e) => e.stopPropagation()}>
                        <h2 className='text-lg font-bold mb-4'>Delete User</h2>
                        <p>Are you sure you want to delete this user?</p>
                        <div className='flex justify-end gap-4 mt-4'>
                            <button
                                onClick={() => setIsDeleteOpen(false)}
                                className="cursor-pointer bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleDeleteUser(currUser)}
                                disabled={isDeleting}
                                className={` bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isDeleting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                type="submit"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DeletingUserModal