import React from 'react'
import Link from 'next/link'

const SubSubCategoryList = ({ subCategory }: { subCategory: any }) => {
    return (
        <div className='  grid grid-cols-16 py-8 '>
            {subCategory?.subsubcategories?.length === 0 ? <p className='col-span-16 text-center text-2xl font-semibold'>No products found</p> :
                (
                    subCategory?.subsubcategories?.map((el: any) => {
                        return (
                            <Link key={el.id} href={`/product-category/${subCategory.category?.name}/${subCategory.name}/${el.id}`} className=' flex col-span-2 flex-col items-center   gap-y-4'>
                                <div className='w-30 h-30 overflow-hidden rounded-full'>
                                    <img className=' hover:scale-110 w-full h-full object-cover' src={el.image.url} />
                                </div>
                                <p className='font-semibold capitalize '>{el.name}</p>
                            </Link>

                        )
                    })
                )
            }

        </div>
    )
}

export default SubSubCategoryList