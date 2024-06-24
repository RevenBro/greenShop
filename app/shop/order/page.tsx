"use client"
import { URL } from '@/service/request'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [basketList, setBasketList] = useState<any>([])
  useEffect(() => {
    axios.get(`${URL}/basket`, {
      params: {
        page:1,
        limit:100
      },
      headers: {
        "Authorization":"Bearer " + window.localStorage.getItem("token")
      }
    }).then(res => {
      setBasketList(res.data.ProductId); 
      
    })
  },[])
  return (
    <div>
      
    </div>
  )
}

export default page