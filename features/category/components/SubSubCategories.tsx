import React from 'react'
import Link from 'next/link'
import { CategoryResponse } from '../types/category.types'
const SubSubCategories = ({ category }: { category: CategoryResponse }) => {
    return (
        <div className="grid grid-cols-16 py-8">
            {category.subcategories.length > 0 ? (
                category?.subcategories?.map((el: any) => (
                    <Link
                        key={el.id}
                        href={`/product-category/${category?.name}/${el.name}`}
                        className="flex col-span-2 flex-col items-center gap-y-4"
                    >
                        <div className="w-30 h-30 overflow-hidden rounded-full">
                            {el.image &&
                                <img
                                    src={el.image.url}
                                    alt={el.name}
                                    className="hover:scale-110 w-full h-full object-cover transition-transform"
                                />
                            }
                        </div>

                        <p className="font-semibold capitalize">
                            {el.name}
                        </p>
                    </Link>
                ))
            ) : <p className="col-span-16 text-center  text-2xl font-semibold">No Subcategories</p>}
        </div>
    )
}

export default SubSubCategories