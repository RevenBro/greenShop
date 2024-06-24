"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './hero.css';

import { Pagination, Autoplay } from 'swiper/modules';
import { Button } from '../Button';

interface SwiperType {
  id: number;
  text: string;
  title: any;
  about: string;
}

export default function App() {

  const swiperData = [
    {
      id: 1,
      text: "Welcome to GreenShop",
      title:<h2 className='mb-[5px] text-[60px] font-black leading-[70px] text-[#3D3D3D] uppercase'>Let's Make a Better <span className='text-[#46A358]'>Planet</span></h2>,
      about: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!"
    },
    {
      id: 2,
      text: "Welcome to GreenShop",
      title:<h2 className='mb-[5px] text-[60px] font-black leading-[70px] text-[#3D3D3D] uppercase'>Let's Make a Better <span className='text-[#46A358]'>Planet</span></h2>,
      about: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!"
    },
    {
      id: 3,
      text: "Welcome to GreenShop",
      title:<h2 className='mb-[5px] text-[60px] font-black leading-[70px] text-[#3D3D3D] uppercase'>Let's Make a Better <span className='text-[#46A358]'>Planet</span></h2>,
      about: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!"
    },
  ]
  return (
    <>
      <div className='hidden md:block'>
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
            <SwiperSlide key={item.id} className='pt-[68px] pb-[85px] rounded-[2px]'>
              <div className='w-[530px] text-left'>
                <p className='mb-[7px] font-medium text-[#3D3D3D] uppercase'>{item.text}</p>
                {item.title}
                <p className='mb-[44px] text-[14px] leading-6 text-[#727272]'>{item.about}</p>
                <Button bgBtn={false} buttonWidth={140} title='SHOP NOW'/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
