'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingList from "./_components/BookingList"
import GlobalApi from "@/app/_utils/GlobalApi"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { useEffect, useState } from "react"


function myBooking() {

    const {user}= useKindeBrowserClient()
    const [bookingList , setBookingList]=useState([])

    useEffect(()=>{
        user&&getUserBookingList()
    },[user])
    const getUserBookingList=()=>{
        GlobalApi.getUserBookingList(user?.email).then(resp=>{
                setBookingList(resp.data.data)
        })
    }

    const filterBookingList=(type)=>{
            const result=bookingList.filter(item=>
                type=='upcoming'?  new Date(item.attributes.Date)>=new Date()
                : new Date(item.attributes.Date)<new Date()
                )
                
        return result
    }

  return (
    <div className='mt-8 p-5 md:px-20 lg:px-10 max-w-screen-2xl mx-auto font-poppins '>
        <h2 className='font-bold text-2xl'>My Booking</h2>

        <Tabs defaultValue="upcoming" className="w-full mt-3">
            <TabsList className="w-full justify-start">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="expired">Expired</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
                <BookingList booklist={filterBookingList('upcoming')} expired={false} updateRecord={()=>getUserBookingList()}   />
                
            </TabsContent>
            <TabsContent value="expired">
            <BookingList booklist={filterBookingList('expired')} expired={true} updateRecord={()=>getUserBookingList()} />
            
            </TabsContent>
        </Tabs>

    </div>
  )
}

export default myBooking