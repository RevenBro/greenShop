"use client"
import { URL } from '@/service/request'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Product } from '@/components/ShopProduct'

const page = ({params}:any) => {
  const [singleData, setSingleData] = useState<any>({})
  const [activeImage, setActiveImage] = useState<string>("")
    const id = params.id

    useEffect(() => {
      axios.get(`${URL}/product/${id}`).then(res => {
        setSingleData(res.data);
        setActiveImage(res.data.image_url[0])
      })
    },[])
    console.log(singleData);
    
  return (
    <>
    <div className='flex items-center justify-between my-[50px]'>
      <div>
      {singleData?.product_name}
      <div className='w-[574px] h-[444px] overflow-hidden flex justify-between'>
        <div className='w-[20%] h-[444px] overflow-y-auto cursor-pointer'>
          {singleData?.image_url?.map((item:any, index:number) => {
            <Image className='border-[1px] border-gray-500' onClick={() => setActiveImage(item)} key={index} src={item} width={100} height={100} alt='Main product images'/>
          })}
        </div>
        <div className='w-[80%]'>
          <Image className='border-[1px] border-gray-500' src={activeImage} width={444} height={444} alt='Main product image'/>
        </div>
      </div>
      </div>
      <div className='flex flex-col w-[574px] '>
        <h2 className='text-[#3D3D3D] font-bold text-[28px] leading-4 mb-[21px]'>{singleData.product_name}</h2>
        <p className='mb-[28px] text-[#46A358] font-bold text-[22px'>${singleData.cost}</p>
        <h3>Short Description:</h3>
        <p className='text-[#727272] text-[14px] leading-[24px] mb-[24px]'>{singleData.short_description}</p>
        <h3>Size:</h3>
        {singleData.size}
        <div>
          <button className='w-[130px] mr-[10px] bg-[#46A358] text-white text-[14px] py-[10px] font-bold rounded-[6px] leading-5'>BUY NOW</button>
          <button className='w-[130px] border-[1px] border-[#46A358] text-[#46A358] text-[14px] py-[10px] font-bold rounded-[6px] leading-5'>ADD TO CART</button>

        </div>
      </div>
    </div>
    <div className='mb-[50px]'>
      <h2>Product Description</h2>
      <p>
        {singleData.product_description}
      </p>
    </div> 
    <div className='flex items-center justify-between flex-wrap my-[50px]'>
        <Product image={"/flower1.png"} name={"Beach Spider Lily"} cost={129.00}/>
        <Product image={"/flower2.png"} name={"Blushing Bromeliad"} cost={139.00}/>
        <Product image={"/flower3.png"} name={"Aluminum Plant"} cost={179.00}/>
        <Product image={"/flower4.png"} name={"Bird's Nest Fern"} cost={99.00}/>
        <Product image={"/flower5.png"} name={"Chinese Evergreen"} cost={39.00}/>
      </div>
    </>
  )
}

export default page