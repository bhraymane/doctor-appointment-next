import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DoctorSuggestionList = ({doctorlist}) => {
  return (
    <div className='p-2 border-solid border-2 border-sky-500-15 rounded-xl mt-5 '>
        <h2 className='font-bold text-lg'>Suggestions</h2>

        <div className='flex flex-col gap-3 mt-4 overflow-hidden'>
        {doctorlist.length>0?doctorlist.map((item,index)=>(
          <Link href={'/details/'+item?.id } key={index} className='rounded-xl flex  gap-1 border-solid border-2 border-sky-500-15  p-3 hover:bg-slate-100  cursor-pointer transition-all ease-in-out  '>
            <Image src={item.attributes?.Image.data.attributes?.url} width={50} height={50} alt='doctor-image' className='rounded-xl object-cover ' />
            <div className='p-2 flex flex-col gap-2 ' >
              <div className='flex gap-1 items-center  '>
                {item.attributes?.categories.data.map((item,index)=>(
                  <span key={index} className='text-[10px] bg-primary bg-opacity-25 px-2 py-1  rounded-full text-primary font-semibold ' >{item.attributes.Name}</span>
                ))}
              </div>

            
              <h2 className='font-bold text-sm'>{item.attributes?.Name} </h2>
              <p className='text-primary  text-xs font-bold'> {item.attributes?.Years_Of_Experience} </p>
              

            </div>
               
          </Link>
        )):
        [1,2,3,4,5,6].map((item,index)=>(
          <div key={index} className='w-full h-[120px] bg-slate-200  rounded-lg mt-1 animate-pulse'>
              
          </div>
        ))
              
        }

      </div>
         
    </div>
  )
}

export default DoctorSuggestionList