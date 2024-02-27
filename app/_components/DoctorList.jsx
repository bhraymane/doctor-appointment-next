"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const DoctorList = ({doctorlist,heading='Popular Doctors'}) => {
    
  return (
    <div className='font-poppins mt-16 max-w-screen-xl mx-auto px-8'>
      <h2 className='font-bold text-2xl mx-4'>{heading} </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 '>
        {doctorlist.length>0?doctorlist.map((item,index)=>(
          <div key={index} className='rounded-xl flex flex-col items-center  gap-2 border-solid border-2 border-sky-500-15 mt-4 p-3 hover:border-primary cursor-pointer transition-all ease-in-out  '>
            <Image src={item.attributes?.Image.data.attributes?.url} width={250} height={800} alt='doctor-image' className='rounded-xl object-cover' />
            <div className='p-2 flex flex-col gap-2' >
              <div className='flex gap-3 items-center'>
                {item.attributes?.categories.data.map((item,index)=>(
                  <span key={index} className='text-xs bg-primary bg-opacity-25 px-2 py-1 rounded-full text-primary font-semibold' >{item.attributes.Name}</span>
                ))}
              </div>

            
              <h2 className='font-bold'>{item.attributes?.Name} </h2>
              <p className='text-primary'> {item.attributes?.Years_Of_Experience} </p>
              <p className='text-justify text-gray-500'> {item.attributes?.Address} </p>
              
              <Link href={'/details/'+item?.id }>
                <Button className="bg-white text-primary w-full border-solid border-2 border-primary cursor-pointer hover:text-white "> Book Now </Button>
              </Link>

            </div>
            
            
          </div>
        )):
        [1,2,3,4,5,6].map((item,index)=>(
          <div key={index} className='w-full h-[550px] bg-slate-200  rounded-lg mt-4 animate-pulse'>
              
          </div>
        ))
              
        }

      </div>
      

    </div>
  )
}

export default DoctorList