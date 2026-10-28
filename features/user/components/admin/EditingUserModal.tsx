import React from 'react'
interface Props {
    isUpdating: boolean
    isEditOpen: boolean
    setIsEditOpen: (isOpen: boolean) => void
    currUser: any
    setCurrUser: (user: any) => void
    handleEditUser: (user: any) => void
}
const EditingUserModal = ({ isUpdating, isEditOpen, setIsEditOpen, currUser, setCurrUser, handleEditUser }: Props) => {
    return (
        <>
            {isEditOpen && (
                <div onClick={() => setIsEditOpen(false)} className='fixed inset-0 bg-black/50 flex items-center justify-center z-999'>
                    <div className='bg-white p-6 rounded-md w-96' onClick={(e) => e.stopPropagation()}>
                        <h2 className='text-lg font-bold mb-4'>Edit User</h2>
                        <form onSubmit={(e) => { e.preventDefault; handleEditUser(currUser) }}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    onChange={(e) => setCurrUser({ ...currUser, name: e.target.value })}
                                    value={currUser.name}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Enter Subcategory name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="icon">
                                    Email
                                </label>
                                <input
                                    onChange={(e) => setCurrUser({ ...currUser, email: e.target.value })}
                                    value={currUser.email}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="icon"
                                    type="email"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="icon">
                                    Role
                                </label>
                                <select
                                    onChange={(e) => setCurrUser({ ...currUser, role: e.target.value })}
                                    value={currUser.role}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="role"
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>


                            <button
                                disabled={isUpdating}
                                className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isUpdating ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                                type="submit"
                            >
                                {isUpdating ? "Updating..." : "Update User"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default EditingUserModal