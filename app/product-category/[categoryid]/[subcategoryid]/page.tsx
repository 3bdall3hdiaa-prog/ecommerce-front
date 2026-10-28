'use client'

import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useParams } from "next/navigation";
import axiosInstance from '@/lib/axios'
import Filter from '@/components/ui/Filter';
import Pagination from '@/components/ui/Pagination';
import Cardproduct from '@/features/product/components/Cardproduct';
import SubCategoryHeader from '@/features/subcategory/components/SubCategoryHeader';
import SubSubCategoryList from '@/features/subcategory/components/SubSubCategoryList';
import ProductsToolBar from '@/features/subcategory/components/ProductsToolBar';
const page = () => {
    const [sort, setSort] = useState('')
    const [subCategory, setSubCategory] = useState<any | null>(null)
    const [value, setValue] = useState<number[]>([0, 10000]);
    const [filterValue, setFilterValue] = useState<number[]>([0, 10000]);
    const [numOfPages, setNumOfPages] = useState(1);
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState<any[]>([]);

    // get SubcategoryName
    const params = useParams();
    const subcategoryid = params.subcategoryid as string;

    const [isLoading, setIsLoading] = useState(true);
    const handlepaginatyion = (page: number) => {
        setPage(page)
        return
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setFilterValue(value);
            setPage(1);
        }, 3000);

        return () => clearTimeout(timer);
    }, [value]);
    console.log(sort)
    useEffect(() => {
        if (!subcategoryid) return;

        const getSubCategory = async () => {
            try {
                setIsLoading(true);

                const res = await axiosInstance.get(
                    `/subcategory/${subcategoryid}?page=${page}&fromPrice=${filterValue[0]}&toPrice=${filterValue[1]}&sort=${sort}`
                );

                if (res.status === 200) {
                    setSubCategory(res.data.data);
                    setProducts(res.data.products);
                    setNumOfPages(res.data.totalPages);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        getSubCategory();
    }, [subcategoryid, page, filterValue, sort]);

    if (isLoading) {
        return <div className="p-5">Loading...</div>;
    }
    return (
        <div className='px-5 w-full h-full py-10'>

            <SubCategoryHeader subCategory={subCategory} />
            <SubSubCategoryList subCategory={subCategory} />

            <div className='mt-6 flex gap-x-8 items-start'>
                <Filter sort={sort} setSort={setSort} value={value} setValue={setValue} />
                <div className=' w-3/4 h-430'>
                    <ProductsToolBar products={products} subCategory={subCategory} />
                    <div className='mt-5 grid grid-cols-1  lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {products.map((product: any) => (
                            <Cardproduct key={product.id} product={product} />
                        ))}
                    </div>
                    <Pagination pages={numOfPages} handlepaginatyion={handlepaginatyion} />
                </div>
            </div>

        </div>
    )
}

export default page