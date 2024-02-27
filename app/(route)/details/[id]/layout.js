"use client"
import { useEffect, useState } from 'react'
import DoctorSuggestionList from './_components/DoctorSuggestionList'
import GlobalApi from '@/app/_utils/GlobalApi'
import { Toaster } from '@/components/ui/sonner'

const layout = ({children}) => {
    const [doctorList, setDoctorList]=useState([])

    useEffect(()=>{
      getDoctorList()
    },[])

    const getDoctorList=()=>{
      GlobalApi.getDoctor().then(resp=>{
        setDoctorList(resp.data.data)
        
      })
    }
  return (
    <div className=' mt-8 p-5 md:px-20 lg:px-10 max-w-screen-2xl mx-auto font-poppins'>
      <h2 className='font-bold text-2xl'>Details</h2>
        <div className='grid grid-cols-4 gap-2 xl:gap-10'>
          {children}
          
          

          <div className='col-span-4 lg:col-span-1 '>
            <DoctorSuggestionList doctorlist={doctorList} />
          </div>
      </div>
    </div>
  )
}

export default layout