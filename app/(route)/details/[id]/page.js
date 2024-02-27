'use client'
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import DoctorDetails from './_components/DoctorDetails'

const Details = ({params}) => {
  const [doctor,setDoctor]= useState()  

  useEffect(()=>{
    getDcotorByID()
    
  },[])

  const getDcotorByID=()=>{
    GlobalApi.getDoctorById(params.id).then(resp=>{
      setDoctor(resp.data.data)
      
    })
  }


  return (
    <div className='col-span-4 lg:col-span-3'>
      {doctor ? <DoctorDetails details={doctor} /> :
      <>
        <div className='w-full h-[300px] bg-slate-200  rounded-xl mt-4 animate-pulse'>
        
        </div>

        <div className='border-solid h-[180px] border-2 border-sky-500-15 rounded-xl mt-5 bg-slate-200 animate-pulse'>
         
        </div>
      </>
      
      }
          
    </div>
  )
}

export default Details