"use client"
import React, { useEffect } from 'react'
import Filter from '../../../../../components/ui/Filter'
import Paginationn from '../../../../../components/ui/Paginationn'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import axiosInstance from '@/lib/axios'
import Cardproduct from '@/features/products/components/Cardproduct'
import SubSubCategoryHeader from '@/features/subsubcategory/components/SubSubCategoryHeader'
import ProductsToolBar from '@/features/subsubcategory/components/ProductsToolBar'
const page = () => {
    const [value, setValue] = useState<number[]>([0, 10000]);
    const [filterValue, setFilterValue] = useState<number[]>([0, 10000]);
    const [products, setProducts] = useState<any | null>(null)
    const [numOfPages, setNumOfPages] = useState<number>(0)
    const [page, setPage] = useState<number>(1)
    const { subsubcategoryid }: { subsubcategoryid: string } = useParams()
    const [sort, setSort] = useState('')
    const [isLoading, setIsLoading] = useState(true);


    const handlepaginatyion = (page: number) => {
        setPage(page)
        return
    }

    useEffect(() => {
        if (!subsubcategoryid) return;

        const getSubSubCategory = async () => {
            try {
                setIsLoading(true);

                const res = await axiosInstance.get(
                    `/product/${subsubcategoryid}?page=${page}&fromPrice=${filterValue[0]}&toPrice=${filterValue[1]}&sort=${sort}`
                );

                if (res.status === 200) {
                    setProducts(res.data.data || []);
                    setNumOfPages(res.data.totalPages)
                }
            } catch (error) {
                console.log('this is error', error);
            } finally {
                setIsLoading(false);
            }
        };

        getSubSubCategory();
    }, [subsubcategoryid, filterValue, page, sort]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setFilterValue(value);
            setPage(1);
        }, 3000);

        return () => clearTimeout(timer);
    }, [value]);

    if (isLoading) {
        return <div className="p-5">Loading...</div>;
    }
    return (
        <div className='px-5 w-full h-full py-10'>

            <SubSubCategoryHeader product={products[0]} />
            {/*products & filter */}
            <div className='mt-6 flex gap-x-8 items-start'>
                <Filter setSort={setSort} sort={sort} value={value} setValue={setValue} />
                {/*container of products */}
                <div className=' w-3/4 h-430'>
                    <ProductsToolBar products={products} sort={sort} setSort={setSort} />
                    <div className='mt-5 grid grid-cols-1  lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {products.length === 0 ? <h1 className='text-2xl text-gray-500'>No products found</h1> :
                            products.map((product: any) => (
                                <Cardproduct key={product.id} product={product} />
                            ))}
                    </div>
                    <Paginationn pages={numOfPages} handlepaginatyion={handlepaginatyion} />
                </div>
            </div>


        </div>
    )
}

export default page