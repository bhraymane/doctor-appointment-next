'use client'
import { useEffect, useState } from "react";
import CategorySearch from "./_components/CategorySearch";
import Hero from "./_components/Hero";
import GlobalApi from "./_utils/GlobalApi";
import DoctorList from "./_components/DoctorList";

export default function Home() {
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
    <div >
        <Hero />
        <CategorySearch />
        <DoctorList doctorlist={doctorList} />
    </div>
    );
}
