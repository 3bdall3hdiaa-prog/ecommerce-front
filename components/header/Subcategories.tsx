"use client"
import React, { useState } from 'react'
import Link from 'next/link'
const Subcategories = ({ subcategory, activeCategory }: { subcategory: any, activeCategory: any }) => {

    return (
        <div className='flex    flex-col gap-y-2'>
            <Link href={`/product-category/${activeCategory.name}/${subcategory.name}`} className='hover:text-[#E14A5C] font-bold cursor-pointer text-[#333333]'>{subcategory.name}</Link>
            <div className=' flex flex-col gap-y-2 text-[#838383]'>
                {subcategory.subsubcategories.map((sub_subcategory: any, index: number) => (<Link href={`/product-category/${activeCategory.name}/${subcategory.name}/${sub_subcategory.id}`} key={index} className='hover:text-[#E14A5C] cursor-pointer'>{sub_subcategory.name}</Link>))}
            </div>


        </div>

    )
}

export default Subcategories