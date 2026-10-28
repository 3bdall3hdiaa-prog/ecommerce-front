import React from 'react'
import { ShoppingBag, CheckCircle, Clock, XCircle, Search } from 'lucide-react';

const OrderStats = ({ data }: { data: { total: number, pending: number, completed: number, cancelled: number } }) => {
    return (
        <div className='flex flex-wrap gap-4 mb-6'>
            <div className='flex-1 bg-white rounded-lg shadow p-4 flex flex-col justify-center gap-y-2'>
                <div className='flex items-center gap-x-2'>
                    <ShoppingBag className='text-gray-400' size={20} />
                    <p className='text-gray-400 text-sm'>Total Orders</p>
                </div>
                <p className='text-3xl font-semibold'>{data.total.toLocaleString()}</p>
            </div>

            <div className='flex-1 bg-white rounded-lg shadow p-4 flex flex-col justify-center gap-y-2'>
                <div className='flex items-center gap-x-2'>
                    <CheckCircle className='text-green-500' size={20} />
                    <p className='text-gray-400 text-sm'>Completed</p>
                </div>
                <p className='text-3xl font-semibold'>{data.completed}</p>
            </div>

            <div className='flex-1 bg-white rounded-lg shadow p-4 flex flex-col justify-center gap-y-2'>
                <div className='flex items-center gap-x-2'>
                    <Clock className='text-yellow-500' size={20} />
                    <p className='text-gray-400 text-sm'>Pending</p>
                </div>
                <p className='text-3xl font-semibold'>{data.pending}</p>
            </div>

            <div className='flex-1 bg-white rounded-lg shadow p-4 flex flex-col justify-center gap-y-2'>
                <div className='flex items-center gap-x-2'>
                    <XCircle className='text-red-500' size={20} />
                    <p className='text-gray-400 text-sm'>Cancelled</p>
                </div>
                <p className='text-3xl font-semibold'>{data.cancelled}</p>
            </div>
        </div>)
}

export default OrderStats