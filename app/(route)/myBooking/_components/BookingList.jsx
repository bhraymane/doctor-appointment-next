import { Button } from '@/components/ui/button'
import {  Calendar, Clock, MapPin } from 'lucide-react'
import Image from "next/image"
import { use, useEffect } from "react"
import moment from 'moment';
import CancelAppointment from './CancelAppointment';
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from 'sonner';




const BookingList = ({booklist,expired,updateRecord}) => {

  const onDeletAppointment=(item)=>{
    GlobalApi.deletbookAppointment(item.id).then(resp=>{
      console.log(resp)
      if(resp){
        toast('Booking Deleted successfully')
        updateRecord()
      }
    })
  }
  return (
    <div>
      {booklist.map((item,index)=>(
        <div className='flex justify-between gap-3 p-3 mt-5 border-solid border-2 border-sky-500-15 rounded-xl max-md:flex-col '>
          <div className='flex gap-4  '>
            
            <Image src={item.attributes.doctor.data.attributes.Image.data.attributes.url} width={130} height={100} alt="doctor image" className='rounded-xl' />
            
            <div className='flex flex-col gap-3 mt-2'>
              <h2 className='text-2xl font-bold max-sm:text-[20px] xs:text-sm'>{item.attributes.doctor.data.attributes.Name}</h2>
              <h2 className='text-lg text-gray-500 flex  items-center gap-2 mt-3 max-sm:text-sm '> <MapPin size={20}/> {item.attributes.doctor.data.attributes.Address}</h2>
              <h2 className='text-lg text-gray-500 flex items-center gap-2 font-semibold max-sm:text-sm'> <Calendar size={20} /> {moment(item.attributes.Date).format("DD - MMM - yyy")}</h2>
              <h2 className='text-lg text-gray-500 flex items-center gap-2 font-semibold  max-sm:text-sm '> <Clock size={20} /> {item.attributes.Time}</h2>
            </div>
          </div>
          <div className=''>
            {!expired&& <CancelAppointment onContinueClick={()=>onDeletAppointment(item)} /> }
          </div>

          
        </div>
      ))}
    </div>
  )
}

export default BookingList