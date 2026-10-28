"use client"
import React from 'react'
import Link from 'next/link'
import Logo from '../header/Logo'
import Searcch from '../header/Search'
import TelAndCart from '../header/TelAndCart'
import Categories from '../header/Categories'
import ProfileandWishlist from '../header/ProfileandWishlist'
import { useAuthStore } from '@/store/authStore'
import { useGetCategories } from '@/features/category/hooks/useGetCategories'
import { CategoryResponse } from '@/features/category/types/category.types'
import { useEffect, useState } from 'react'
import axiosInstance from '@/lib/axios'
const Header = () => {
    const { accessToken, user } = useAuthStore()
    const [searchInput, setSearchInput] = useState("")
    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const { data, isLoading: categoriesLoading } = useGetCategories()
    const [searchResults, setSearchResults] = useState([])
    const myCategories = data?.data || []

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearch(searchInput)
        }, 500);
        return () => clearTimeout(timer);
    }, [searchInput])
    useEffect(() => {
        const searchProducts = async () => {
            try {
                if (!search) {
                    setSearchResults([]);

                    return;
                };
                setIsLoading(true)
                const res = await axiosInstance.get(`/product?search=${search}`)
                console.log(res.data.data);
                setSearchResults(res.data.data);
            } catch (error) {
                console.log(error);
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }
        searchProducts();
    }, [search])
    if (categoriesLoading) {
        return <div>Loading...</div>
    }
    return (
        <main className='w-full relative bg-[#0d0625]'>


            {/*part 1 */}
            <div className='flex justify-between p-4'>
                <ul className='text-white flex gap-x-2 text-[12px]'>
                    <Link className='hover:text-gray-400 transition  pr-2 border-r-1 border-gray-500' href={"/about-us"}><li>About Us</li></Link>
                    <Link className='hover:text-gray-400 transition pr-2 border-r-1 border-gray-500' href={"/our-partners"}> <li>Our Partners</li></Link>
                    <Link className='hover:text-gray-400 transition' href={"/work-with-us"}> <li>Work With Us</li></Link>
                </ul>
                <ul className='text-white flex gap-x-2 text-[12px]'>
                    <Link className='hover:text-gray-400 transition pr-2 border-r-1 border-gray-500' href={"/track-your-order"}><li>Track You Order</li></Link>
                    <Link className='hover:text-gray-400 transition' href={"/contact-us"}> <li>Contact Us</li></Link>
                </ul>
            </div>
            <hr className='text-gray-600'></hr>
            {/*part 2 */}
            <div className='w-full  h-20 flex  items-center justify-between p-4'>
                <Logo />
                <Searcch setSearchResults={setSearchResults} searchInput={searchInput} setSearchInput={setSearchInput} searchResults={searchResults} />
                <TelAndCart user={user} />
            </div>
            {/*part 3 */}
            <div className='z-[999]  relative flex justify-between items-center px-4 bg-[#E14A5C] '>
                <Categories myCategories={myCategories} isLoading={isLoading} />
                <ProfileandWishlist user={user} accessToken={accessToken} />
            </div>



        </main >
    )
}

export default Header

