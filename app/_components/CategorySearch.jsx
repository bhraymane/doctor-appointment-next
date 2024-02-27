"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'

const CategorySearch = () => {
  const [categoryList, setCategoryList]=useState([])
  
  useEffect(()=>{
    getCategoryList()
  },[])
  
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{

      setCategoryList(resp.data.data)
    })
  }

  
  return (
    <div className='font-poppins  flex flex-col items-center gap-2 mx-2'>
        <h2 className='text-3xl font-bold'>Search <span className='text-primary'>Doctors</span> </h2>
        <p className='text-gray-400 text-center'>Search Your Doctor and Book Appointment in one click</p>

        <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
            <Input type="email" placeholder="Search...."  />
            <Button type="submit">
                <Search size={16} className='mr-2'   />
                Search
            </Button>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center mt-5 gap-4 '>
        {categoryList.length>0 ?categoryList.map((item,index)=>index<6&&(
          <Link href={'/search/'+item.attributes?.Name} key={index} className='bg-primary bg-opacity-15 p-5 rounded-lg flex flex-col justify-center items-center gap-2  hover:scale-110 transition-all ease-in-out cursor-pointer'>
            <Image src={item.attributes?.Icon.data.attributes?.url} alt="cat" width={60} height={60}   />
            <p className='font-semibold text-primary max-sm:text-xs '>{item.attributes?.Name} </p>
          </Link>
          ))
        :
        [1,2,3,4,5,6].map((item,index)=>(
          <div key={index} className='max-sm:w-[120px] w-[150px] h-[130px] bg-slate-200  rounded-lg  animate-pulse'>

          </div>
        ))

        }
        </div>

    </div>
  )
}

export default CategorySearch