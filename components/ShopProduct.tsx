import Image from 'next/image'
import React from 'react'


export const Product:React.FC<any> = ({image, name, cost}) =>  {
    
  return (
    <li className='w-[258px] inline-block'>
        <div className='relative bg-[#FBFBFB] overflow-hidden pt-[31px] pb-[18px] product-wrapper'>
          <Image src={image} alt='Product Image' width={250} height={250}/>
        </div>
        <h2 className='leading-4 text-[#3D3D3D] mt-[12px] mb-[6px]'>{name}</h2>
        <p className='text-[#46A358] text-[18px] leading-4 font-bold'>{cost}$</p>
    </li>
  )
}
