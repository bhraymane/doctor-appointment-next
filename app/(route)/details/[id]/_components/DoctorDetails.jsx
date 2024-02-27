import { SocialMediaLinks } from '@/constants/data'
import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import BookAppointment from './BookAppointment'

const DoctorDetails = ({details}) => {

    useEffect(()=>{
        console.log()
    },[])
    
  return (   
    <>
        <div className='grid grid-cols-1 md:grid-cols-3 border-solid border-2 border-sky-500-15 mt-5 p-3 rounded-xl '>
          {/* Doctor Image  */}
           <div className='md:h-[270px]  overflow-hidden rounded-xl border-solid border-2 border-gray-200'>
              <Image src={details.attributes?.Image.data.attributes?.url}
              width={800} 
              height={800}
              alt='doctor-image'
              className='object-cover w-full  '
              />
          </div>
          {/* Doctor Info  */}
          <div className='col-span-2 mt-5 flex md:px-10 flex-col gap-4 items-baseline'>
                <h2 className='font-bold text-2xl'>{details.attributes?.Name}</h2>
                <h2 className='flex gap-2 text-gray-500 text-md'>
                    <GraduationCap/>
                    <span>{details.attributes?.Years_Of_Experience} of Experince</span>
                </h2>
                <h2 className='text-md flex gap-2 text-gray-500'>
                    <MapPin/>
                    <span>{details.attributes.Address}</span>
                </h2>

                <div className='flex gap-3 items-center'>
                {details.attributes?.categories.data.map((item,index)=>(
                  <span key={index} className='text-xs bg-primary bg-opacity-25 px-2 py-1 rounded-full text-primary font-semibold' >{item.attributes.Name}</span>
                ))}
                </div>

                <ul className="flex justify-center gap-3 md:gap-4">

                {SocialMediaLinks.map((item,index)=>(
                    <li key={index}>
                        <a
                        href={item.hash}
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-800 transition hover:text-gray-700/75"
                        >
                        <span className="sr-only">{item.name}</span>
                        
                           {item.icon}
                        
                        </a>
                    </li>

                ))}

            </ul>

            <BookAppointment details={details}  />
          </div>
        </div>
          {/* About Doctor  */}

         
        
         <div className='p-3 border-solid border-2 border-sky-500-15 rounded-xl mt-5'>
         <h2 className='font-bold text-xl'>About Me</h2>
         <p className='text-gray-500 tracking-wide mt-2 text-justify'>{details.attributes.About[0].children[0].text}</p>
        </div>
    </>
    
    
  )
}

export default DoctorDetails