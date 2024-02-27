"use client"
import { links } from '@/constants/data'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import {LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { MdOutlineAccountCircle, MdOutlineBookmarks, MdOutlineLogout, MdSettings } from "react-icons/md";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const Header = () => {
  const {user}=useKindeBrowserClient()
  
  useEffect(()=>{
    
  },[user])

  const [toggle, setToggle] =useState(true)
  return (
    <main className='sticky top-2 w-full z-[9] max-sm:top-0'>
      <div className='max-w-screen-xl mx-auto max-md:mx-auto max-xl:mx-10 flex justify-between items-center  py-2 px-6 max-sm:rounded-none   rounded-xl bg-white border border-opacity-40 bg-opacity-80 border-white     shadow-lg shadow-black/[0.1] backdrop-blur-[0.5rem] '>
        <Link href='/' className='flex items-center gap-1'>
          <img src="/LOGO.svg" alt="logo" width={45} />
        </Link>

        <ul className='flex gap-8 font-poppins text-md  max-sm:hidden '>
          {links.map((link)=>(
          <Link key={link.name} href={link.hash}>
            <li className='hover:text-[#219874]' >{link.name}</li>
          </Link>
          
          ))}
        </ul>

        <div className='max-sm:hidden'>
        {user ? 
              <Popover className="relative  ">
              <PopoverTrigger>
                  <Image src={user.picture ? `${user.picture}` : "user1.svg"} alt='user' width={35} height={20} className='rounded-md  '  />
              </PopoverTrigger>
              <PopoverContent className="absolute top-3 -right-6 w-[170px] p-2 text-sm " >
                <ul className='flex flex-col gap-3  font-poppins '>
                  <li className='hover:bg-slate-200 p-3 rounded-md cursor-pointer flex gap-3 items-center'>
                  <MdOutlineAccountCircle size={20}  />
                    PROFILE
                  </li>
                  <Link href={'/myBooking'} className='hover:bg-slate-200 p-3 rounded-md cursor-pointer flex gap-3 items-center'>
                  <MdOutlineBookmarks size={20}  />
                    MY BOOKING
                  </Link>
                  <LogoutLink className='hover:bg-slate-200 p-3 rounded-md cursor-pointer flex gap-3  items-center'>
                  <MdOutlineLogout size={20}  />

                    LOG OUT
                  </LogoutLink>
                  
                </ul>
              </PopoverContent>
            </Popover>
              
              :
              <LoginLink >
                <Button className='font-poppins text-md '>Get Started</Button>
              </LoginLink>
            }
        

        </div>
            

        <div className='max-sm:block relative hidden '>
        <Image alt='menu' src={toggle ? '/menu.svg' : '/close.svg'} width={20} height={20} onClick={()=>(setToggle(!toggle))} />
        <div className={`${toggle ? 'hidden' : "absolute  backdrop-blur-lg bg-white/80 right-0 top-12 rounded-lg text-center px-6 py-2"}  `}>
          <ul className='flex flex-col gap-2 font-poppins     '>
            {links.map((link)=>(
            <Link key={link.name} href={link.hash}>
              <li className='text-[#219874] ' >{link.name}</li>
            </Link>
            
            ))}
          </ul>
          
          
          
        
        {user ? 
              <Popover className="relative  ">
              <PopoverTrigger>
                  <MdSettings size={30} color='#219874' />
                
              </PopoverTrigger>
              <PopoverContent className="absolute top-3 -right-14 w-[175px]  p-2 text-xs backdrop-blur-lg bg-white/80 " >
                <ul className='flex  gap-3 font-semibold '>
                  <li className='hover:bg-slate-200 p-3 rounded-md cursor-pointer'>
                    <MdOutlineAccountCircle size={20} color="#219874" />
                  </li>
                  <li className='hover:bg-slate-200 p-3 rounded-md cursor-pointer'>
                    <MdOutlineBookmarks size={20} color="#219874" />
                  </li>
                  <LogoutLink className='hover:bg-slate-200 p-3 rounded-md cursor-pointer'>
                    <MdOutlineLogout size={20} color="#219874" />
                  </LogoutLink>
                  
                </ul>
              </PopoverContent>
            </Popover>
              
              :
              <LoginLink >
                <Button className='font-poppins text-md '>Get Started</Button>
              </LoginLink>
            }
        

        
          
          
          

        </div>

        </div>


      </div>

    </main>
  )
}

export default Header