import React from 'react'
import { Users, UserCheck, UserX, Shield } from 'lucide-react';
interface Props {
    totalUsers: number;
    activeUsers: number;
    adminUsers: number;
}
const Stats = ({ totalUsers, activeUsers, adminUsers }: Props) => {
    return (
        <div className='grid grid-cols-3 gap-4 mb-6'>
            <div className='bg-white p-4 rounded-md shadow flex flex-col justify-center gap-y-2'>
                <div className='flex items-center gap-x-2'>
                    <Users className='text-gray-400' size={20} />
                    <p className='text-sm text-gray-500'>Total Users</p>
                </div>
                <p className='text-3xl font-semibold'>{totalUsers}</p>
            </div>

            <div className='bg-white p-4 rounded-md shadow flex flex-col justify-center gap-y-2'>
                <div className='flex items-center gap-x-2'>
                    <UserCheck className='text-green-500' size={20} />
                    <p className='text-sm text-gray-500'>Active Users</p>
                </div>
                <p className='text-3xl font-semibold'>{activeUsers}</p>
            </div>


            <div className='bg-white p-4 rounded-md shadow flex flex-col justify-center gap-y-2'>
                <div className='flex items-center gap-x-2'>
                    <Shield className='text-blue-500' size={20} />
                    <p className='text-sm text-gray-500'>Admin Users</p>
                </div>
                <p className='text-3xl font-semibold'>{adminUsers}</p>
            </div>
        </div>

    )
}

export default Stats