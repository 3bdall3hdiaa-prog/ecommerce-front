import React from 'react'
import { UserForm } from '../../types/user.types'
interface Props {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    newUser: UserForm
    setNewUser: React.Dispatch<React.SetStateAction<UserForm>>
    handleAddUser: (user: UserForm) => void
    isPending: boolean
}
const AddUserModal = ({ isOpen, setIsOpen, newUser, setNewUser, handleAddUser, isPending }: Props) => {
    return (
        <>
            {isOpen && (
                <div onClick={() => setIsOpen(false)} className='fixed inset-0 bg-black/50 flex items-center justify-center z-999'>
                    <div className='bg-white p-6 rounded-md w-96' onClick={(e) => e.stopPropagation()}>
                        <h2 className='text-lg font-bold mb-4'>Add User</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            handleAddUser(newUser)
                        }}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                    value={newUser.name}
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
                                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                    value={newUser.email}
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
                                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                    value={newUser.role}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="role"
                                >
                                    <option value="" disabled>Choose Role</option>

                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="pass">
                                    Password
                                </label>
                                <input
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, password: e.target.value })
                                    }
                                    value={newUser.password}
                                    required
                                    minLength={6}
                                    pattern="^(?=.*[a-zA-Z])(?=.*[0-9]).+$"
                                    title="Password must contain at least one letter and one number"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="pass"
                                    type="password"
                                    placeholder="Enter Password"
                                />
                            </div>
                            <button
                                disabled={isPending}
                                className={`transition hover:opacity-60 bg-[#E14A5C]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                                type="submit"
                            >
                                {isPending ? "Adding..." : "Add User"}
                            </button>
                        </form>
                    </div>
                </div >
            )}
        </>
    )
}

export default AddUserModal