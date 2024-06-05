import React from 'react'
import TrendSection from './Status/TrendSection';
import SidebarS from './Status/SidebarS';
import Deal from './Deal';
import Products from './Products';
const Status = () => {
    
  return (
    <div className='w-[100%] h-auto flex justify-center relative'>
        <SidebarS />
        <div className='flex flex-col mr-auto justify-center'>
          <TrendSection/>
          <Deal/>
          <Products/>
        </div>
        
    </div>
  )
}

export default Status