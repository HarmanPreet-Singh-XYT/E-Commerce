import React from 'react'
import Sidebar from './Sidebar';
import { useMenu } from '@/Helpers/MenuContext';
import { useRouter } from 'next/navigation'
import { HeartIcon,ShoppingBagIcon,Square3Stack3DIcon,HomeIcon,Bars3Icon } from '@heroicons/react/24/outline';
const Menubar = () => {
  const { toggleCart, toggleFav, toggleSidebar, setSidebarType } = useMenu();
  const router = useRouter();
  return (
    <>
      <Sidebar/>
      <div className='flex fixed bg-white h-14 bottom-0 z-40 justify-evenly shadow-top min-w-[230px] w-full max-w-[500px] flex-shrink-1 rounded-t-xl lg:hidden'>
        <button onClick={()=>{toggleSidebar();setSidebarType("menu")}}><Bars3Icon width={30}/></button>
        <button onClick={()=>{toggleSidebar();setSidebarType("category")}}><Square3Stack3DIcon width={30}/></button>
        <button onClick={() => router.push('/')}><HomeIcon width={30}/></button>
        <button onClick={()=>{toggleFav()}}><HeartIcon width={30}/></button>
        <button onClick={()=>{toggleCart()}}><ShoppingBagIcon width={30}/></button>
      </div>
    </>
  )
}

export default Menubar
// 
//  onClick={()=>{setSidebar(true);setisMenu(false)}}