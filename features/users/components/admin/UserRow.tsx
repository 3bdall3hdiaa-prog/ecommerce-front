import React from 'react'
import { Pencil, Trash, ShoppingCart, Shirt } from 'lucide-react'
const UserRow = ({ user, handleOpenModal }: any) => {


    return (
        <tr key={user.id} className='hover:bg-gray-200  border-b border-gray-300'>
            <td className='text-center py-4'>{user.id}</td>
            <td className='text-center'>{user.name}</td>
            <td className="">
                <p className='line-clamp-1 text-center'>{user.email}</p>
            </td>
            <td className='text-center'> {user.role}</td>
            <td className='text-center'> {user.provider}</td>
            <td onClick={(e) => { e.stopPropagation() }}>
                <div className='flex items-center justify-center gap-x-4'>
                    <Pencil
                        onClick={() => handleOpenModal({ type: 'editing', user })}
                        className='text-blue-300 hover:text-blue-500 cursor-pointer'
                    />
                    <Trash onClick={() => handleOpenModal({ type: 'deleting', user })} className='text-red-300 hover:text-red-500 cursor-pointer' />
                </div>
            </td>
        </tr>)
}

export default UserRow