import React from 'react'
import CategoryList from '../_components/CategoryList'


const layout = ({children,params}) => {
  
  return (
    <div className='grid grid-cols-4 mx-auto max-w-screen-xl font-poppins '>
        <div className='max-sm:hidden'>
            <CategoryList category={params.name} />
        </div>

        <div className='max-sm:col-span-4 col-span-3'>
          {children}
        </div>
        
    </div>
  )
}

export default layout