import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const ShipingDelivery = () => {
    return (
        <div className=' lg:col-span-3 col-span-1 p-6 border lg:h-3/4 border-gray-200  rounded-2xl flex flex-col gap-y-6'>
            <p className='text-2xl font-semibold'>Shipping & Delivery</p>
            <div className='space-y-2'>
                <div className='flex flex-wrap gap-y-4 items-center justify-between'>
                    <div className='flex items-center gap-x-2'>
                        <LocalShippingIcon sx={{ color: "" }} />
                        <p>Courier delivery</p>
                    </div>
                    <div>
                        2-3
                        <p>Days</p>
                    </div>
                    <div>
                        <p>From</p>
                        <p>$50</p>
                    </div>
                </div>

                <p className='w-3/4 text-gray-500'>Our courier will deliver to the specified address.</p>
            </div>
        </div>
    )
}

export default ShipingDelivery