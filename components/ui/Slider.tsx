import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
const Slider = ({ product }: any) => {
    return (
        <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}

            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className='w-full h-full'>
                    <img className='w-full h-full object-cover' src={product.images.mainImage.url} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-full'>
                    {product.images.otherImages[0] && <img className='w-full h-full object-cover' src={product.images.otherImages[0].url} />}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-full'>
                    {product.images.otherImages[1] && <img className='w-full h-full object-cover' src={product.images.otherImages[1].url} />}
                </div>
            </SwiperSlide>

        </Swiper>

    )
}

export default Slider