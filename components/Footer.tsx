import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer>
        <div className='container px-5'>
            <div className='bg-[#FBFBFB] p-5 flex items-center justify-between'>
                <div className='w-[204px]'>
                    <Image className='mb-[17px]' src={"/footer-img1.svg"} alt='Plant' width={90} height={89}/>
                    <h3 className='mb-2 text-[#3D3D3D] font-bold text-[17px] leading-4'>Garden Care</h3>
                    <p className='text-[#727272] text-[14px] leading-[22px]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>  
                <div className='w-[204px]'>
                    <Image className='mb-[17px]' src={"/footer-img2.svg"} alt='Plant' width={90} height={89}/>
                    <h3 className='mb-2 text-[#3D3D3D] font-bold text-[17px] leading-4'>Plant Renovation</h3>
                    <p className='text-[#727272] text-[14px] leading-[22px]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>  
                <div className='w-[204px]'>
                    <Image className='mb-[17px]' src={"/footer-img3.svg"} alt='Plant' width={90} height={89}/>
                    <h3 className='mb-2 text-[#3D3D3D] font-bold text-[17px] leading-4'>Watering Graden</h3>
                    <p className='text-[#727272] text-[14px] leading-[22px]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>  
                <form>
                    <h3 className='text-[#3D3D3D] font-bold text-[18px] leading-4 mb-[18px]'>Would you like to join newsletters?</h3>
                    <label className='shadow relative mb-[17px]'>
                        <input className='w-[354px] py-[12px] pl-[11px] rounded-[6px] text-[#ACACAC] text-[14px] leading-4' type="email" placeholder='enter your email address...' autoComplete='off' name='email'/>
                        <button className='w-[85px] py-[12px] font-bold text-[18px] leading-4 text-white right-0 absolute bg-[#46A358] rounded-tr-[6px] rounded-br-[6px]'>Join</button>
                    </label>
                    <div className='w-[354px] mt-[17px]'>
                        <p className='text-[#727272] text-[13px] leading-[22px]'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
                    </div>
                </form>
            </div>

            <div className='bg-[#ECF6EE] py-[23px] px-5 flex items-center justify-between'>
                <a href="/">
                    <Image src={"/site-logo.svg"} alt='site logo' width={150} height={34}/>
                </a>
                <div className='w-[200px] flex items-center space-x-2'>
                    <Image src={"/location-icon.svg"} alt='Location' width={20} height={20}/>
                    <address className='text-[#3D3D3D] text-[14px] leading-[22px]'>70 West Buckingham Ave. Farmingdale, NY 11735</address>
                </div>
                <div className=' flex items-center space-x-2'>
                    <Image src={"/mail-icon.svg"} alt='Location' width={20} height={20}/>
                    <a href='mailto:contact@greenshop.com' className='text-[#3D3D3D] text-[14px] leading-[22px]'>contact@greenshop.com</a>
                </div>
                <div className=' flex items-center space-x-2'>
                    <Image src={"/phone-icon.svg"} alt='Location' width={20} height={20}/>
                    <a href='tel:+8801911717490' className='text-[#3D3D3D] text-[14px] leading-[22px]'>+88 01911 717 490</a>
                </div>
            </div>

            <div className='bg-[#FBFBFB] py-[30px] px-5 flex items-center justify-between'>
                <ul className='flex flex-col'>
                    <li className='text-[#3D3D3D] font-bold text-[18px] leading-4 mb-2'>My Account</li>
                    <a className='text-[#3D3D3D] text-[14px] leading-[30px]'>My Account</a>
                    <a className='text-[#3D3D3D] text-[14px] leading-[30px]'>Our stores</a>
                    <a className='text-[#3D3D3D] text-[14px] leading-[30px]'>Contact us</a>
                    <a className='text-[#3D3D3D] text-[14px] leading-[30px]'>Career</a>
                    <a className='text-[#3D3D3D] text-[14px] leading-[30px]'>Specials</a>
                </ul>
                <ul className='flex flex-col'>
                    <li className='text-[#3D3D3D] font-bold text-[18px] leading-4 mb-2'>Help & Guide</li>
                    <a className='text-[#3D3D3D] text-[14px] leading-[30px]'>Help Center</a>
                    <a className='text-[#3D3D3D] text-[14px] leading-[30px]'>How to Buy</a>
                    <a className='text-[#3D3D3D] text-[14px] leading-[30px]'>Shipping & Delivery</a>
                    <a className='text-[#3D3D3D] text-[14px] leading-[30px]'>Product Policy</a>
                    <a className='text-[#3D3D3D] text-[14px] leading-[30px]'>How to Return</a>
                </ul>
                <ul className='flex flex-col'>
                    <li className='text-[#3D3D3D] font-bold text-[18px] leading-4 mb-2'>Categories</li>
                    <a className='text-[#3D3D3D] text-[14px] leading-[30px]'>House Plants</a>
                    <a className='text-[#3D3D3D] text-[14px] leading-[30px]'>Potter Plants</a>
                    <a className='text-[#3D3D3D] text-[14px] leading-[30px]'>Seeds</a>
                    <a className='text-[#3D3D3D] text-[14px] leading-[30px]'>Small Plants</a>
                    <a className='text-[#3D3D3D] text-[14px] leading-[30px]'>Accessories</a>
                </ul>
                <ul>
                    <li className='text-[#3D3D3D] font-bold text-[18px] leading-4 mb-[10px]'>Social Media</li>       
                    <div className='flex items-center gap-[10px] mb-[33px]'>
                        <a target='_blank' href="https://facebook.com">
                            <Image src={"/facebok-icon.svg"} alt='Facebook' width={30} height={30}/>
                        </a>
                        <a target='_blank' href="https://instagram.com">
                            <Image src={"/instagram-icon.svg"} alt='Facebook' width={30} height={30}/>
                        </a>
                        <a target='_blank' href="https://twitter.com">
                            <Image src={"/x-icon.svg"} alt='Facebook' width={30} height={30}/>
                        </a>
                        <a target='_blank' href="https://linkedin.com">
                            <Image src={"/linkedin-icon.svg"} alt='Facebook' width={30} height={30}/>
                        </a>
                        <a target='_blank' href="https://union.com">
                            <Image src={"/union-icon.svg"} alt='Facebook' width={30} height={30}/>
                        </a>
                    </div>
                    <li className='text-[#3D3D3D] font-bold text-[18px] leading-4 mb-[13px]'>We accept</li>
                    <div className='flex items-center gap-[10px] mb-[33px]'>
                        <a target='_blank' href="https://visa.com">
                            <Image src={"/pay-icon.svg"} alt='Visa' width={224} height={26}/>
                        </a>
                    </div>
                </ul>
            </div>

            <p className='text-[#3D3D3D] text-[14px] leading-[30px] mt-2 text-center mb-[13px]'>© 2021 GreenShop. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer