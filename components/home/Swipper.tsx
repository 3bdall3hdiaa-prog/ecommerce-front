"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
const Swipper = () => {



    return (
        <div className=" w-2/5 h-[600px] rounded-3xl overflow-hidden">
            <Swiper
                className='hover:cursor-pointer h-full'
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-full object-cover' src="https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2025/02/mplc-slider-slide-3-opt.jpg.webp" />
                        <p className='absolute text-amber-400 top-10 left-10 line-clamp-2'>Fresh Design of 2023</p>
                        <p className='font-bold absolute text-amber-400 top-20 left-10 text-2xl line-clamp-2'>Samsung-galaxy 5</p>
                        <Link href={'/shop'} className='absolute px-4 py-2 bg-amber-400 rounded-full text-white top-36 left-10'>Buy Now</Link>

                    </div>

                </SwiperSlide>


                <SwiperSlide>
                    <img className='w-full h-full object-cover' src="https://woodmart.xtemos.com/marketplace2/wp-content/uploads/sites/21/2025/06/mplc-slider-slide-1-opt.jpg.webp" />
                </SwiperSlide>

                <SwiperSlide >
                    <Image className='w-full h-full object-cover' width={600} height={600} src="/mplc-slider-slide-2-opt.jpg.webp" alt='' />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Swipper