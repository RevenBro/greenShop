"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { HamburgerIcon, LoginIcon, OrderBasket, SearchIcon } from '@/assets/Icon'
import { Button } from './Button'
import { usePathname } from 'next/navigation'
import { Badge, Input, Modal } from 'antd'
import axios from 'axios'
import { URL } from '@/service/request'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/compat/router'

interface LinkType  {
  id: number;
  title: string;
  path: string;
  isActive: boolean;
}

function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [loginModal, setLoginModal] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<string>("Login")
  const navList = [
    {
        id:1,
        title: "Home",
        path: "/",
        isActive: pathname == "/" ? true : false
    },
    {
        id:2,
        title: "Shop",
        path: "/shop",
        isActive: pathname == "/shop" ? true : false
    },
    {
        id:3,
        title: "Plant Care",
        path: "/plantcare",
        isActive: pathname == "/plantcare" ? true : false
    },
    {
        id:4,
        title: "Blogs",
        path: "/blogs",
        isActive: pathname == "/blogs" ? true : false
    }
]

  const [showSearchInput, setShowSearchInput] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    if(evt.target.value == "") {
      setTimeout(() => {
        setShowSearchInput(false);
      }, 2500)
    }
  }

  const closeModal = (evt:React.MouseEvent) => {
    if((evt.target as HTMLButtonElement).id == "modal-wrapper") {
      setOpenModal(false)
    }
  }

  const [basketList, setBasketList] = useState<any>([])
  const [loginEmail, setLoginEmail] = useState<string>("")
  const [loginPassword, setLoginPassword] = useState<string>("")

  const [registerEmail, setRegisterEmail] = useState<string>("")
  const [registerPassword, setRegisterPassword] = useState<string>("")
  const [registerFirstname, setRegisterFirstname] = useState<string>("")
  const [registerLastname, setRegisterLastname] = useState<string>("")

  const [forgotLoginEmail, setForgotLoginEmail] = useState<string>("")
  const [registerOTPCode, setRegisterOTPCode] = useState<string>("")
  const [forgotOTPCode, setForgotOTPCode] = useState<string>("")

  const openLoginModal = () => {
    const data = {
      password: loginPassword,
      usernameoremail: loginEmail
    }
    try {
      axios.post(`${URL}/login`, data).then(res => {
        window.localStorage.setItem("token", res.data.access_token);
        setLoginModal(false)
        setLoginPassword("")
        setLoginEmail("")
        toast.success("Salom, " + res.data.first_name + "!")
      })
    }
    catch (error:any) {
      console.log(error.message)
    }
  }

  const openRegisterModal = () => {
    const data = {
      firstname: registerFirstname,
      lastname: registerLastname,
      password:  registerPassword,
      email: registerEmail
    }
    try {
      axios.post(`${URL}/register`, data).then(res => {
        setModalContent("registerVerify")
        setLoginEmail(registerEmail)
      })
    }
    catch (error:any) {
      console.log("Registercha:" + error.message)
    }
  }

  const forgotBtnClick = () => {
    axios.post(`${URL}/forgot/${forgotLoginEmail}`).then(res => {
      setModalContent("forgotVerify")
    })
  }

  const registerVerifyBtnClick = () => {
    const data = {
      email: registerEmail,
      code: registerOTPCode,
    }
    try {
      axios.post(`${URL}/users/verify`, {}, {
        params:data
      }).then(res => {
        setModalContent("Login")
        setRegisterEmail("")
        setRegisterFirstname("")
        setRegisterLastname("")
        setRegisterPassword("")

      })
    }
    catch (error:any) {
      console.log("Verify" + error.message)
    }
  }

  const forgotOTPBtnClick = () => {
    axios.post(`${URL}/verify`, {}, {
      params:{
        email:forgotLoginEmail,
        otp:forgotOTPCode
      }
    }).then(res => {
      setLoginEmail(forgotLoginEmail)
      setModalContent("Login")
    })
  }

    // useEffect(() => {
    //   axios.get(`${URL}/basket`, {
    //     params: {
    //       page:1,
    //       limit:100
    //     },
    //     headers: {
    //       "Authorization":"Bearer " + window.localStorage.getItem("token")
    //     }
    //   }).then(res => {
    //     setBasketList(res.data.productId)
    //   })
    // },[])

  return (
    <header className='pt-[40px] md:pt-[25px] w-full fixed h-[80px] top-0 bg-white z-50'>
       <Toaster position='top-center' reverseOrder={false}/>
      <div className="container px-[24px] md:px-0 flex items-center space-x-2 md:space-x-0 justify-between md:border-b-[1px] md:border-[#A2D0AB]">
        <Link className='hidden md:block pb-[17px]' href={"/"}>
          <Image src={"/site-logo.svg"} alt='site logo' width={150} height={34} priority={true}/>
        </Link>
        <Navbar/>
        <div className='hidden md:flex items-center space-x-[30px] pb-[11px]'>
          <button className='flex items-center' onClick={() => setShowSearchInput(true)}>
            {!showSearchInput && <SearchIcon/>}
            
            <input onChange={handleInputChange} className={`${showSearchInput ? "w-[310px] py-[12px] pl-[41px]" : "w-[0px]"} input-search-icon relative duration-500  bg-[#F8F8F8] rounded-[10px]  outline-none focus:shadow-sm text-[14px] leading-4`} type="text" placeholder='Find your plants' name='plants-search'/>
          </button>
          <Badge style={{color:"white", backgroundColor:"teal"}} size='small' count={basketList?.length}>
            <Link href={`/shop/order`}>
              <OrderBasket/>
            </Link>
          </Badge>
          <Button onClick={() => setLoginModal(true)}  bgBtn={false} title='Login' iconPosition='prev' icon={<LoginIcon/>} buttonWidth={100}/>
        </div>
        <input className={`md:hidden w-[80%] py-[12px] pl-[41px] input-search-icon relative duration-500  bg-[#F8F8F8] rounded-[10px]  outline-none focus:shadow-sm text-[14px] leading-4`} type="text" placeholder='Find your plants' name='plants-search'/>

        <button onClick={() => setOpenModal(true)} className='md:hidden flex items-center justify-center opacity-80 shadow w-[45px] h-[45px] rounded-[14px] bg-[#46A358]'>
          <HamburgerIcon/>
        </button>
      </div>
      <div onClick={closeModal} id='modal-wrapper' className={`${openModal ? "left-0" : "left-[-100%]"} modal fixed duration-500 z-[2] backdrop-blur-md h-[100vh] w-full top-0`}>
        <div className={`${openModal ? "right-0" : "right-[-200%]"} w-[60%] duration-500 absolute h-[100vh] bg-green-500 p-10 flex flex-col space-y-4`}>
           {navList.map((item:LinkType) => (
             <Link onClick={() => setOpenModal(false)} key={item.id} className={`font-bold pb-[31px]  leading-[20.11px] text-[#3D3D3D]`} href={item.path}>{item.title}</Link>
           ))}
        </div>
      </div>
      <Modal  open={loginModal} onCancel={() => setLoginModal(false)}>
          <div className='p-4'>
            <ul className='flex items-center justify-center space-x-2.5 text-[20px] font-medium'>
              <li className={`${modalContent == "Login" ? "text-[#46A358]" : ""} cursor-pointer`} onClick={() => setModalContent("Login")}>Login</li>
              <span className='w-[2px] h-[17px] bg-gray-600'></span>
              <li className={`${modalContent == "Register" ? "text-[#46A358]" : ""} cursor-pointer`} onClick={() => setModalContent("Register")}>Register</li>
            </ul>
          </div>
          {modalContent == "Login" && 
            <div className='flex flex-col items-center'>
              <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className='w-[300px] py-[12px] pl-[14px] text-[#A5A5A5] outline-none border-[1px] border-[#EAEAEA] rounded-[5px] mb-[17px] focus:border-[#46A358] focus:text-[#3D3D3D]' type="email" placeholder='almamun_uxui@outlook.com'/>
              <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className='w-[300px] py-[12px] pl-[14px] text-[#A5A5A5] outline-none border-[1px] border-[#EAEAEA] rounded-[5px] mb-[17px] focus:border-[#46A358] focus:text-[#3D3D3D]' type="password" placeholder='***********I'/>
              <button onClick={() => setModalContent("forgotEmail")} className='text-[#46A358] font-medium mb-[27px]'>Forgot Password?</button>
              <Button onClick={openLoginModal} title='Login' buttonWidth={320} bgBtn={false}/>
            </div>
          }
          {modalContent == "Register" && 
            <div className='flex flex-col items-center'>
              <input value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} className='w-[300px] py-[12px] pl-[14px] text-[#A5A5A5] outline-none border-[1px] border-[#EAEAEA] rounded-[5px] mb-[17px] focus:border-[#46A358] focus:text-[#3D3D3D]' type="email" placeholder='almamun_uxui@outlook.com'/>
              <input value={registerFirstname} onChange={(e) => setRegisterFirstname(e.target.value)} className='w-[300px] py-[12px] pl-[14px] text-[#A5A5A5] outline-none border-[1px] border-[#EAEAEA] rounded-[5px] mb-[17px] focus:border-[#46A358] focus:text-[#3D3D3D]' type="text" placeholder='Firt Name'/>
              <input value={registerLastname} onChange={(e) => setRegisterLastname(e.target.value)} className='w-[300px] py-[12px] pl-[14px] text-[#A5A5A5] outline-none border-[1px] border-[#EAEAEA] rounded-[5px] mb-[17px] focus:border-[#46A358] focus:text-[#3D3D3D]' type="text" placeholder='Last Name'/>
              <input value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} className='w-[300px] py-[12px] pl-[14px] text-[#A5A5A5] outline-none border-[1px] border-[#EAEAEA] rounded-[5px] mb-[17px] focus:border-[#46A358] focus:text-[#3D3D3D]' type="password" placeholder='***********I'/>
              <Button onClick={openRegisterModal} title='Register' buttonWidth={320} bgBtn={false}/>
            </div>
          }
          {modalContent == "forgotEmail" &&
            <div className='flex flex-col items-center space-y-4'>
              <Input value={forgotLoginEmail} onChange={(e) => setForgotLoginEmail(e.target.value)} placeholder='Enter your email' size='large' />
              <Button onClick={forgotBtnClick} title='Send Code' buttonWidth={320} bgBtn={false}/>
            </div>
          }
          {modalContent == "forgotVerify" &&
           <div className='flex flex-col items-center space-y-4'>
            <Input.OTP value={forgotOTPCode} onChange={(e) => setForgotOTPCode(e)} length={6} size='large' />
            <Button onClick={forgotOTPBtnClick} title='Enter Code' buttonWidth={320} bgBtn={false}/>
          </div>
          }

          {modalContent == "registerVerify" && 
              <div className='flex flex-col items-center space-y-4'>
                <Input.OTP value={registerOTPCode} onChange={(e) => setRegisterOTPCode(e)} length={6} size='large' />
                <Button onClick={registerVerifyBtnClick} title='Enter Code' buttonWidth={320} bgBtn={false}/>
              </div>
          }
      </Modal>
    </header>
  )
}

export default Header


// ok cancel qayerda ? 