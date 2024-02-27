"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { useEffect, useState } from "react"
import { CalendarDays, Clock } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import GlobalApi from "@/app/_utils/GlobalApi"
import { toast } from "sonner"



const BookAppointment = ({details}) => {

  const [date, setDate] = useState(new Date())
  const [TimeSlot, setTimeSlot] = useState([])
  const [selectedTimeSlot, setSelectedTimeSlot] = useState()
  const {user}=useKindeBrowserClient()
  const [note,setNote]=useState();

  useEffect(()=>{
    getTime()
    
  },[])

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
        timeList.push({
            time: i + ':00 AM'
        })
        timeList.push({
            time: i + ':30 AM'
        })
    }
    for (let i = 1; i <= 6; i++) {
        timeList.push({
            time: i + ':00 PM'
        })
        timeList.push({
            time: i + ':30 PM'
        })
    }

    setTimeSlot(timeList)
  }

  const isPastDate=(day)=>{
    return day<=new Date();
  }

  const saveBooking=()=>{
    const data={
      data:{
        UserName:user.given_name+" "+user.family_name ,
        Email:user.email ,
        Date:date ,
        Time: selectedTimeSlot,
        Note: note,
        doctor:details.id,
      }
    }

    GlobalApi.bookAppointment(data).then(resp=>{
      
      
      if(resp){
        GlobalApi.sendEmail(data).then(resp=>{
          
        })
        toast("Booking Appointment send in your email")
      }
      
    })
    
  }


  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-primary text-white w-full border-solid border-2 border-primary cursor-pointer hover:text-primary hover:bg-white transition-all ease-in-out  ">Book Appointment </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            <div className="font-poppins">
              <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="flex flex-col gap-1 mt-3 items-baseline max-sm:items-center">
                  <h2 className="flex gap-2 items-center ">
                    <CalendarDays size={20} className="text-primary" />
                    select date
                  </h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border "
                    disabled={isPastDate}
                  />
                </div>

                <div className="flex flex-col gap-1 mt-3 items-baseline max-sm:items-center">
                  <h2 className="flex gap-2 items-center ">
                    <Clock size={20} className="text-primary" />
                    select time slot
                  </h2>
                  <div className="grid grid-cols-3 gap-2  border rounded-lg p-2 max-sm:p-0 max-sm:border-none w-full">
                    {TimeSlot.map((item,index)=>(
                    <h2 
                    onClick={()=>setSelectedTimeSlot(item.time)}
                    className={`border-solid border border-slate-200 rounded-full p-2 max-sm:p-1 flex justify-center items-center cursor-pointer hover:bg-primary hover:text-white ${item.time == selectedTimeSlot&& "bg-primary text-white"}`}>
                      {item.time}
                    </h2>
                  ))}
                  </div>
                </div>

              </div>
              <Textarea className="mt-3 resize-none" placeholder="Note" onChange={(e)=>setNote(e.target.value)}  />

            </div>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-end">
          <DialogClose asChild >  
            <Button type="button" variant="outline" className="text-red-500 border-red-500 hover:bg-white hover:text-red-500 max-sm:mt-2 ">
              Close
            </Button>       
          </DialogClose>
          <Button type="button" className="hover:bg-white hover:text-primary border-primary border" disabled={!(date&&selectedTimeSlot)} onClick={()=>saveBooking()} >
            Book Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>



  )
}

export default BookAppointment