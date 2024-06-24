"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './hero.css';

import { Pagination, Autoplay } from 'swiper/modules';
import { Button } from '../Button';
import { RightArrowIcon } from '@/assets/Icon';

interface SwiperType {
  id: number;
  text: string;
  title: any;
  about: string;
}

function HeroMobileSlider() {
    const swiperData = [
        {
          id: 1,
          text: "Welcome to GreenShop",
          title:<h2 className='mb-[3px] text-[24px] font-black leading-[29px] text-[#3D3D3D] uppercase'>Let's Make a Better <span className='text-[#46A358]'>Planet</span></h2>,
          about: "We are an online plant shop offering a wide range "
        },
        {
          id: 2,
          text: "Welcome to GreenShop",
          title:<h2 className='mb-[3px] text-[24px] font-black leading-[29px] text-[#3D3D3D] uppercase'>Let's Make a Better <span className='text-[#46A358]'>Planet</span></h2>,
          about: "We are an online plant shop offering a wide range "
        },
        {
          id: 3,
          text: "Welcome to GreenShop",
          title:<h2 className='mb-[3px] text-[24px] font-black leading-[29px] text-[#3D3D3D] uppercase'>Let's Make a Better <span className='text-[#46A358]'>Planet</span></h2>,
          about: "We are an online plant shop offering a wide range "
        },
      ]
  return (
    <div className='md:hidden'>
        <Swiper
        pagination={{
        dynamicBullets: true,
        }}
        autoplay={{
        delay:2000,
        disableOnInteraction: false
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
    >
        {swiperData.map((item:SwiperType) => (
        <SwiperSlide key={item.id} className='hero-mobile-banner py-[25px] rounded-[2px]'>
            <div className='w-[206px] text-left'>
            <p className='mb-[7px] font-medium text-[11px] text-[#3D3D3D] uppercase'>{item.text}</p>
            {item.title}
            <p className='mb-[10px] text-[12px] leading-[18px] text-[#727272]'>{item.about}</p>
            <Button icon={<RightArrowIcon/>} iconPosition='next' bgBtn={true} buttonWidth={88} title='SHOP NOW'/>
            </div>
        </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}

export default HeroMobileSlider