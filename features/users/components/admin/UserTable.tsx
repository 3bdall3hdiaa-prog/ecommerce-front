import React from 'react'
import UserRow from './UserRow'
import { Search } from 'lucide-react'
import { UserResponse } from '../../types/user.types'
interface Props {
    users: UserResponse[]
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    handleOpenModal: ({ type, user }: { type: 'editing' | 'deleting' | 'adding', user?: UserResponse }) => void
}
const UserTable = ({ users, searchTerm, setSearchTerm, handleOpenModal }: Props) => {
    return (
        <>
            <div className='flex justify-between items-center mb-4'>
                <div className=' w-full flex justify-between items-center'>
                    <p className='text-xl font-bold'>Manage Users</p>
                    <div className='flex rounded-3xl border border-gray-300 px-3 py-2 mt-2 w-[250px] items-center gap-x-2'>
                        <Search />
                        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="search by name..." className='outline-none ' />
                    </div>
                </div>


            </div>

            <div className='text-right'>
                <button onClick={() => handleOpenModal({ type: 'adding' })} className=' cursor-pointer bg-[#E14A5C] hover:opacity-60 text-white px-4 py-2 rounded-md'>
                    Add User
                </button>
            </div>
            <div className='overflow-x-auto mt-5'>
                <table className='w-full table-fixed'>
                    <thead>
                        <tr className='border-b border-gray-300 text-center uppercase'>
                            <th className='w-30'>id</th>
                            <th className='w-30'>name</th>
                            <th className='w-30'>email</th>
                            <th className='w-30'>role</th>
                            <th className='w-30'>provider</th>
                            <th className='w-24'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user: any) => (
                            <UserRow handleOpenModal={handleOpenModal} key={user.id} user={user} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserTable