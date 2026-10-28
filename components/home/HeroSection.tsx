import React, { useEffect } from 'react'
import Swipper from './Swipper'
import { Flame, Zap } from 'lucide-react'
import Link from 'next/link'
import Rating from '@mui/material/Rating';
import HotCategories from '@/components/home/HotCategories';
import { SubsubcategoryResponse } from '@/features/subsubcategory/types/subsubcategory';
interface Props {
    mySubSubCategories: SubsubcategoryResponse[];
    isLoading: boolean
}
const HeroSection = ({ mySubSubCategories, isLoading }: Props) => {

    return (
        <div className="flex gap-x-4">

            <Swipper />

            <div className="w-3/5 flex flex-col ">
                <div className='w-full flex  flex gap-y-2 gap-x-4'>

                    <div className='relative w-[360px] h-[400px] rounded-2xl overflow-hidden'>
                        <img src={"https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2024/12/banner-l-washmachine.jpg"} alt="Hero" className="w-full h-full object-cover rounded-lg" />
                        <div className='text-[#eaebb8]   absolute left-14 top-10 flex flex-col gap-y-3 text-center '>
                            <p className='text-sm'>Special Offer</p>
                            <p className='text-[28px] font-semibold'>Washing Machine</p>
                            <p className='text-sm'>$799 special offer</p>
                        </div>
                    </div>

                    {/* Hot Categories */}
                    <HotCategories mySubSubCategories={mySubSubCategories} isLoading={isLoading} />

                </div>
                <div className=' mt-4 p-4'>
                    {/* Best Pick of the Week */}
                    <div className="">
                        <div className="flex items-center  mb-3">
                            <p className="text-gray-800 font-bold text-lg">Best Pick of the Week </p>
                        </div>

                        <Link href="/product/best-pick" className="group block relative overflow-hidden rounded-2xl  shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center gap-4 p-4">
                                {/* Product Image */}
                                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-white/10 p-2">
                                    <img
                                        src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=150"
                                        alt="Best pick product"
                                        className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="flex-1 flex flex-col gap-y-1">

                                    <h3 className=" font-bold text-sm">MacBook Pro M3</h3>
                                    <Rating name="read-only" value={4} readOnly />
                                    <div className="flex flex-col justify-center  ">
                                        <span className=" font-bold text-sm text-red-400">$1,399</span>
                                        <span className="text-gray-500 text-xs line-through">$1,999</span>
                                    </div>
                                </div>

                                {/* Arrow Icon */}
                                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Zap className="w-5 h-5 text-yellow-400" />
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 rounded-2xl  transition-all duration-300 pointer-events-none"></div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection