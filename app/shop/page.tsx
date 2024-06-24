import { Product } from '@/components/ShopProduct'
import React from 'react'

function page() {
  return (
    <div className='container'>
      <h2 className='text-[#46A358] font-bold mt-[30px] text-[17px] leading-4 mb-[12px]'>You may be interested in</h2>
      <hr/>

      <div className='flex items-center justify-between flex-wrap my-[50px]'>
        <Product image={"/flower1.png"} name={"Beach Spider Lily"} cost={129.00}/>
        <Product image={"/flower2.png"} name={"Blushing Bromeliad"} cost={139.00}/>
        <Product image={"/flower3.png"} name={"Aluminum Plant"} cost={179.00}/>
        <Product image={"/flower4.png"} name={"Bird's Nest Fern"} cost={99.00}/>
        <Product image={"/flower5.png"} name={"Chinese Evergreen"} cost={39.00}/>
      </div>
    </div>
  )
}

export default page