"use client"
import DoctorList from '@/app/_components/DoctorList'
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

const Search = ({params}) => {
  
  const [doctors,setDoctors]=useState([])

  useEffect(()=>{
    getDoctors()
  }
  ,[])

  const getDoctors=()=>(
    GlobalApi.getDoctorByCategory(params.name).then(resp=>{
      setDoctors(resp.data.data)
    })
  )
  return (
    <div>
      <DoctorList doctorlist={doctors} heading={params.name} />
    </div>
  )
}

export default Search