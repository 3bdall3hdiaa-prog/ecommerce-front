"use client"
import React, { ReactElement } from 'react'
import Link from 'next/link'
import Filter from '../../components/ui/Filter'
import Pagination from '../../components/ui/Pagination'
import { useState, useEffect } from 'react'
import { useGetProductsWithFilter } from '@/features/product/hooks/useGetProductsWithFilter'
import { useGetCategories } from '@/features/category/hooks/useGetCategories'
import Cardproduct from '@/features/product/components/Cardproduct'

const page = () => {
    const [sort, setSort] = useState('')
    const [currPage, setCurrPage] = useState(1)
    const [value, setValue] = useState([0, 10000]);
    const [filterValue, setFilterValue] = useState([0, 10000]);
    const [type, setType] = useState("All");
    const { data, isLoading } = useGetProductsWithFilter({ page: currPage, limit: 15, type: type, fromPrice: filterValue[0], toPrice: filterValue[1], sort: sort })
    const { data: C, isLoading: isLoadingCategories }: any = useGetCategories()
    const products = data?.data ?? []
    const total = data?.pagination.total ?? 0
    const totalPages = data?.pagination.totalPages ?? 0

    const categories = C?.data ?? []


    const handlepaginatyion = (index: number) => {
        setCurrPage(index)
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setFilterValue(value);
        }, 3000);

        return () => clearTimeout(timer);
    }, [value]);
    useEffect(() => {
        setCurrPage(1)
    }, [filterValue, sort]);
    return (
        <div className='px-5 w-full h-full py-10'>


            {/*navbar */}
            <div className='space-y-4'>
                <p className='text-3xl font-semibold  capitalize'>shop</p>
                <ul className='flex text-md  gap-x-2 '>
                    <li className='hover:text-black text-gray-500'><Link href="/">Home</Link></li>/
                    <li className='capitalize font-semibold'>shop</li>
                </ul>
            </div>

            {/* subcategories */}
            <div className='  grid grid-cols-16 py-8 '>
                {isLoadingCategories ? <p className="text-center text-gray-400">Loading...</p>
                    :
                    categories.map((el: any) => {
                        return (
                            <Link key={el.id} href={`/product-category/${el.name}`} className=' flex col-span-2 flex-col items-center   gap-y-4'>
                                <div className='w-30 h-30 overflow-hidden rounded-full'>
                                    {el.image && <img className=' hover:scale-110 w-full h-full object-cover' src={el.image.url} />}
                                </div>
                                <p className='font-semibold capitalize '>{el.name}</p>
                            </Link>

                        )
                    })}

            </div>



            {/*products & filter */}
            <div className='mt-6 flex gap-x-8 items-start'>
                {/*filter */}
                <Filter sort={sort} setSort={setSort} value={value} setValue={setValue} />

                {/*container of products */}
                <div className=' w-3/4 h-430'>
                    <div className='flex items-center justify-between'>
                        <p className='text-gray-500'>Showing all {total} </p>
                    </div>
                    <div className='mt-5 grid grid-cols-5 gap-4'>
                        {/*card of product */}
                        {isLoading ? <p>Loading...</p>
                            : products.map((product: any) => (
                                <Cardproduct key={product.id} product={product} />
                            ))}


                    </div>
                    <Pagination pages={totalPages} handlepaginatyion={handlepaginatyion} />
                </div>
            </div>


        </div>

    )
}

export default page
