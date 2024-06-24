import { LikeIcon, OrderBasket, SearchIcon } from '@/assets/Icon';
import { URL } from '@/service/request';
import axios from 'axios';
import { headers } from 'next/headers';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

interface ProductType {
  item:any,
  refresh:boolean,
  setRefresh:(value:boolean) => void,
}

export const Product:React.FC<ProductType> = ({item, setRefresh, refresh}) =>  {
  console.log(item);
  

  const handleBasketBtnClick = (id:string) => {
    axios.post(`${URL}/basket`,{
      productId: id
    },{
      headers: {
        "Authorization": "Bearer " + window.localStorage.getItem("token")
      }
    }).then(res => {
      toast.success("Savatga saqlandi.")
      setRefresh(!refresh)
    })
  }

  const handleLikeBtnClick = (id:string) => {
    axios.post(`${URL}/like/${id}`, {}, {
      headers: {
        "Authorization": "Bearer " + window.localStorage.getItem("token")
      }
    }).then(res => {
      toast.success("Saqlanganlarga qo'shildi.")
      setRefresh(!refresh)
    })
  }
  
  return (
    <li className='w-[258px] inline-block'>
        <Toaster position='top-center' reverseOrder={false}/>
        <div className='relative bg-[#FBFBFB] overflow-hidden pt-[31px] pb-[18px] product-wrapper'>
          <Link href={`/shop/${item?.product_id}`}>
            <Image src={item.image_url ? item.image_url[0] : ""} alt='Product Image' width={250} height={250}/>
          </Link>
          <ul className='absolute flex justify-center space-x-[10px] bottom-[-40px] left-0 right-0 mx-auto duration-500 product-list'>
            <li onClick={() => handleBasketBtnClick(item.product_id)} className={`${item.basket ? "text-teal-400" : "text-black"} w-[35px] flex items-center justify-center cursor-pointer h-[35px] bg-blue-100 rounded-md`}>
              <OrderBasket/>
            </li>
            <li onClick={() => handleLikeBtnClick(item.product_id)} className={`${item.liked ? "text-red-500" : "text-black"} w-[35px] flex items-center justify-center cursor-pointer h-[35px]  bg-blue-100 rounded-md `}>
              <LikeIcon/>
            </li>
            <li className='w-[35px] flex items-center justify-center cursor-default h-[35px] bg-blue-100 rounded-md '>
              <SearchIcon/>
            </li>
        </ul>
        </div>
        <h2 className='leading-4 text-[#3D3D3D] mt-[12px] mb-[6px]'>{item.product_name}</h2>
        <p className='text-[#46A358] text-[18px] leading-4 font-bold'>{item.cost}$</p>
    </li>
  )
}
