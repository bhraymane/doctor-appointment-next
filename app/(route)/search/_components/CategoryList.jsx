"use client"
import GlobalApi from "@/app/_utils/GlobalApi"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const CategoryList = ({category}) => {

    const [categoryList, setCategoryList]=useState([])
  
    useEffect(()=>{
        getCategoryList()
    },[])
  
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{

      setCategoryList(resp.data.data)
    })
  }
  return (
    <div className="h-screen  mt-16">
        <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList className="overflow-visible">
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Categories" >
                    {categoryList.map((item,index)=>(
                        <CommandItem key={index}>
                            <Link  href={'/search/'+item.attributes?.Name} className={`flex items-center gap-2 p-2 rounded-md w-full cursor-pointer ${category==item.attributes?.Name&& 'bg-primary bg-opacity-15'} `} >
                                <Image src={item.attributes?.Icon.data.attributes?.url} alt="cat" width={40} height={60}   />
                                <p className='font-semibold text-primary max-sm:text-xs  '>{item.attributes?.Name} </p>
                            </Link>
                        </CommandItem>
                    ))}
                
                </CommandGroup>
                
            </CommandList>
        </Command>

    </div>
    
  )
}

export default CategoryList