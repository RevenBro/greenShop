"use client"
import HeroMobileSlider from "@/components/HeroSlider/HeroMobileSlider";
import HeroSlider from "../components/HeroSlider"
import RangleSlider from "@/components/RangleSlider";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { URL } from "@/service/request";
import {Product} from "@/components/Product/Product";
import { Pagination, Popover } from "antd";
import { RightArrowIcon2 } from "@/assets/Icon";
import { CustomCard } from "@/components/CustomCard";

interface CategoryType {
  category_id: string;
  category_name: string;
}

interface ProductType {
  product_id: string;
  product_name: string;
  cost: string;
  image: string;
}

interface SizeType {
  size_id: number;
  size_name: string;
}

interface TagType {
  tag_id: number;
  tag_name: string;
  path: string | null;
}

export default function Home() {  
  const [arrow, setArrow] = useState<string>(`Show`)
  const [categoryData, setCategoryData] = useState<Array<CategoryType>>([])
  const sizeData:SizeType[] = [
    {
      size_id:1,
      size_name:"Small"
    },
    {
      size_id:2,
      size_name:"Medium"
    },
    {
      size_id:3,
      size_name:"Large"
    }
  ]
  const tagData:TagType[] = [
    {
      tag_id:1,
      tag_name:"All Plants",
      path: null
    },
    {
      tag_id:2,
      tag_name:"New Arrivals",
      path:"new-arrival"
    },
    {
      tag_id:3,
      tag_name:"Sale",
      path:"sale"
    },
  ]
  const [products, setProducts] = useState<Array<any>>([])
  const [tagId, setTagId] = useState<string | null>("")
  const [sizeId, setSizeId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [rangeValue, setRangeValue] = useState<Array<number> | null | string>(null)
  const [categoryId, setCategoryId] = useState<string>("")
  const [refresh, setRefresh] = useState<boolean>(false)  
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(10)

  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }

    if (arrow === 'Show') {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  
  const token = window.localStorage.getItem("token")

  useEffect(() => {
    axios.get(`${URL}/categories?page=1&limit=100`).then(res => {
      setCategoryData(res.data.categories)      
    })
  },[])
  useEffect(() => {
    axios
      .get(`${URL}/products`, {
        params: {
          page: page,
          limit: 10,
          name: null,
          category: categoryId,
          size: sizeId,
          status: tagId,
          min_price: rangeValue ? rangeValue[0] : null,
          max_price: rangeValue ? rangeValue[1] : null,
        },
        headers: token ? {
          "Authorization": "Bearer " + token
        } : {}
      })
      .then((res) => {
        setIsLoading(false)
        setLimit(res.data.total_count)
        setProducts(res.data.products)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      })
  }, [categoryId, sizeId, rangeValue, tagId, page, refresh])

  return (
    <>
      <section className="pt-[12px] pb-[45px]">
        <div className="container px-5 md:px-0">
          <HeroSlider/>
          <HeroMobileSlider/>
        </div>
      </section>

      <section className="mb-[290px]">
        <div className="container">
          <div className="flex justify-between gap-[50px]">
            <div className="w-[25%] bg-[#FBFBFB]">
              <div className="p-[15px]">
                <h2 className="font-bold text-[18px] leading-4 text-[#3d3d3d]">Categories</h2>
                <ul className="pl-[12px] space-y-3 mt-[20px] mb-[35px]">
                  {categoryData && Array.isArray(categoryData) && categoryData?.length > 0 && categoryData?.map((item:CategoryType) => (
                    <li onClick={() => {
                      setIsLoading(true)
                      setTimeout(() => {
                        setCategoryId(item.category_name)
                      },600)
                    }} className={`${categoryId == item.category_name ? "text-[#46A358] font-semibold" : ""} flex items-center justify-between cursor-pointer`} key={item.category_id}>
                      <span>{item.category_name}</span>
                    </li>
                  ))}
                </ul>
                <h2 className="font-bold text-[18px] leading-4 text-[#3d3d3d] mb-[20px]">Price Range</h2>
                <RangleSlider setRangeValue={setRangeValue}/>
                <Button buttonWidth={90} title="Filter" bgBtn={false} />
                <h2 className="font-bold text-[18px] leading-4 text-[#3d3d3d] mb-[20px] mt-[46px]">Size</h2>
                <ul className="pl-[12px] space-y-3 mt-[20px] mb-[35px]">
                  {sizeData.map((item:SizeType) => (
                    <li onClick={() => setSizeId(item.size_name)} className={`${sizeId == item.size_name ? "font-semibold text-[#46A358]" : ""} flex items-center justify-between cursor-pointer`} key={item.size_id}>
                      <span>{item.size_name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={"#"}>
                <Image src={"/plant-banner.png"} alt="Banner" width={314} height={470}/>
              </Link>
            </div>
            <div className="w-[75%]">
              <div className="flex items-center justify-between">
                <ul className="flex items-center space-x-[37px]">
                  {tagData.map((item:TagType) => (
                    <li className={`${tagId == item.path ? "text-[#46A358] font-medium" : " "} cursor-pointer`} onClick={() => {
                      setIsLoading(true)
                      setTimeout(() => {
                        setTagId(item.path)
                      },700)
                    }} key={item.tag_id}>{item.tag_name}</li>
                  ))}
                </ul>
                <div className="flex items-center cursor-pointer font-medium">
                Short by:
                <Popover placement="bottom" title={""} content={<ul className="font-semibold">
                  <li className="p-3 hover:scale-105 cursor-pointer">Title sorting</li>
                  <li className="p-3 hover:scale-105 cursor-pointer">Price sorting</li>
                </ul>} arrow={mergedArrow}>
                  <h2>Default sorting</h2>
                </Popover>
                <Image className="ml-[5px]" src={"/arrow-bottom.svg"} alt="Arrow" width={12} height={12}/>
                </div>
              </div>
              <ul className="mt-[31px] flex justify-between flex-wrap">
                {isLoading ? "Loading..." : products?.length ? products.map((item:any) => (
                  <Product refresh={refresh} setRefresh={setRefresh} key={item.product_id} item={item}/>
                )) : "No plants :("}
              </ul>
              <div className="mt-[90px] flex justify-end">
                <Pagination onChange={(evt) => {
                  setIsLoading(true)
                  setTimeout(() => {
                    setPage(evt)
                  },700)
                }} defaultCurrent={page} total={limit} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-[138px]">
        <div className="container flex items-center justify-between">
          <div className="w-[586px] relative bg-[#FBFBFB] flex flex-col items-center">
            <Image className="absolute left-0 top-0 bottom-0 my-auto" src={"/flower-img1.svg"} alt="Plant" width={292} height={292}/>
              <div className="w-[292px] flex flex-col items-end bg-[#FBFBFB] mr-[-50%] pt-[37px] pb-[46px] pr-[30px] text-right">
                <h2 className="mb-[10px] text-[#3D3D3D] font-black text-[18px] leading-6 ">SUMMER CACTUS & SUCCULENTS</h2>
                <p className="text-[#727272] mb-[12px] text-[14px] leading-6">We are an online plant shop offering a wide range of cheap and trendy plants</p>
                <Button buttonWidth={140} title="Find More" bgBtn={false} icon={<RightArrowIcon2/>} iconPosition="next"/>
              </div>
          </div>

          <div className="w-[586px] relative bg-[#FBFBFB] mb-[50px] flex flex-col items-center">
            <Image className="absolute left-0 top-0 bottom-0 my-auto" src={"/flower-img2.png"} alt="Plant" width={292} height={292}/>
              <div className="w-[292px] flex flex-col items-end bg-[#FBFBFB] mr-[-50%] pt-[37px] pb-[46px] pr-[30px] text-right">
                <h2 className="mb-[10px] text-[#3D3D3D] font-black text-[18px] leading-6 ">STYLING TRENDS & MUCH MORE</h2>
                <p className="text-[#727272] mb-[12px] text-[14px] leading-6">We are an online plant shop offering a wide range of cheap and trendy plants</p>
                <Button buttonWidth={140} title="Find More" bgBtn={false} icon={<RightArrowIcon2/>} iconPosition="next"/>
              </div>
          </div>
        </div>
      </section>

      <section className="mb-[100px]">
        <div className="container px-5">
          <h2 className="text-[#3D3D3D] text-center font-bold text-[30px] leading-4 mb-[15px]">Our Blog Posts</h2>
          <p className="text-[#727272] text-[14px] text-center leading-6 mb-3">We are an online plant shop offering a wide range of cheap and trendy plants. </p>

          <div className="flex items-center justify-between">
                <CustomCard title="Cactus & Succulent Care Tips" description="Cacti are succulents are easy care plants for any home or patio." src="/custom-img1.png" topTitle="September 12  I Read in 6 minutes"/>
                <CustomCard title="Top 10 Succulents for Your Home" description="Best in hanging baskets. Prefers medium to high light." src="/custom-img2.png" topTitle="September 13  I Read in 2 minutes"/>
                <CustomCard title="Cacti & Succulent Care Tips" description="Cacti and succulents thrive in containers and because most are.." src="/custom-img3.png" topTitle="September 15  I Read in 3 minutes"/>
                <CustomCard title="Best Houseplants Room by Room" description="The benefits of houseplants are endless. In addition to.." src="/custom-img4.png" topTitle="September 15  I Read in 2 minutes"/>
          </div>
        </div>
      </section>
    </>
  );
}
