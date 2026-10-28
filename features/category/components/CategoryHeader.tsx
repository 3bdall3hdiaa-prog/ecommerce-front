import React from 'react'
import Link from 'next/link'
import { CategoryResponse } from '../types/category.types'
const CategoryHeader = ({ category }: { category: CategoryResponse }) => {
    return (
        <div className="space-y-4">
            <p className="text-3xl font-semibold capitalize">
                {category?.name}
            </p>

            <ul className="flex gap-x-2 text-md">
                <li className="hover:text-black text-gray-500">
                    <Link href="/">Home</Link>
                </li>

                <span>/</span>

                <li className="capitalize font-semibold">
                    {category?.name}
                </li>
            </ul>
        </div>
    )
}

export default CategoryHeader