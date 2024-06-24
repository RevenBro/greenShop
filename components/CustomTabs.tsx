"use client"
import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import axios from 'axios';
import { URL } from '@/service/request';

interface TagType {
  id: string;
  title: string;
}

interface PropsType {
  setTagId: (key:string) => void
}

const CustomTabs: React.FC<PropsType> = ({setTagId}) => {

const onChange = (key: string) => {
  setTagId(key);
};

const [items, setItems] = useState([])

useEffect(() => {
  axios.get(`${URL}/tag-navbar`).then(res => {
    setItems(res.data.map((item:TagType) => ({key:item.id, label:item.title})))
  })
},[])
  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  )
};

export default CustomTabs;