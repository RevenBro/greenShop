import Image from 'next/image'
import React from 'react'

export const CustomCard = ({src, topTitle, title, description}: {src: string; topTitle: string; title: string; description: string}) => {
  return (
    <div className='w-[268px] bg-[#FBFBFB]'>
        <Image className='mb-[8px]' src={src} alt='Plant' width={268} height={195}/>
        <div className='px-[13px] pb-[13px]'>
            <span className='text-[#46A358] font-medium text-[14px] leading-4 mb-1'>{topTitle}</span>
            <h3 className='text-[#3D3D3D] font-bold text-[20px] leading-[26px] mb-1'>{title}</h3>
            <p className='text-[#727272] text-[14px] leading-[22px] mb-2'>{description}</p>
            <button>
                <span className='text-[#3D3D3D] font-medium text-[14px] leading-4'>Read More</span>
            </button>
        </div>
    </div>
  )
}
