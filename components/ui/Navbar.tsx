import React from 'react'
import Link from 'next/link'
const Navbar = ({ category, subcategory, sub_subcategory }: any) => {
    return (
        <div className='space-y-4'>
            {category && <p className='text-3xl font-semibold  capitalize'>{category?.name}</p>}
            {subcategory && <p className='text-3xl font-semibold  capitalize'>{subcategory?.name}</p>}
            {sub_subcategory && <p className='text-3xl font-semibold  capitalize'>{sub_subcategory?.name}</p>}
            <ul className='flex text-md gap-x-2 '>
                <li className='hover:text-black text-gray-500'><Link href="/">Home</Link></li>/
                <li className='capitalize'>{category?.name}</li>
            </ul>
        </div>
    )
}

export default Navbar