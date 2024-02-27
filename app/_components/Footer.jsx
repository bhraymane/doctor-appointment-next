import { Footerlinks, SocialMediaLinks } from '@/constants/data'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 font-poppins mt-6">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex justify-center text-teal-600">
                <img src="/LOGO.svg" alt="logo" width={75} />
            </div>

            <p className="mx-auto mt-6 max-w-xl text-center leading-relaxed text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
                itaque neque.
            </p>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                {Footerlinks.map((link,index)=>(
                    
                    <li key={index}>
                        <a className="text-gray-700 transition hover:text-gray-700/75" href={link.hash} > {link.name} </a>
                    </li>
                ))}
  
            </ul>

            <ul className="mt-12 flex justify-center gap-6 md:gap-8">

                {SocialMediaLinks.map((item,index)=>(
                    <li key={index}>
                        <a
                        href={item.hash}
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:text-gray-700/75"
                        >
                        <span className="sr-only">{item.name}</span>
                        
                           {item.icon}
                        
                        </a>
                    </li>

                ))}

            </ul>

        </div>
    </footer>
  )
}

export default Footer