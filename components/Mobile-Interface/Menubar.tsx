import React from 'react'
import Sidebar from './Sidebar';
import { useMenu } from '@/Helpers/MenuContext';
const Menubar = () => {
  const { toggleCart, toggleFav, toggleSidebar, setSidebarType } = useMenu();
  return (
    <>
      <Sidebar/>
      <div className='flex fixed bg-white h-14 bottom-0 z-40 justify-evenly shadow-top min-w-[230px] w-full max-w-[500px] flex-shrink-1 rounded-t-xl lg:hidden'>
        <button onClick={()=>{toggleSidebar();setSidebarType("menu")}}><i className="fa-solid fa-bars fa-xl"></i></button>
        <button onClick={()=>{toggleSidebar();setSidebarType("category")}}><i className="fa-solid fa-layer-group fa-xl"></i></button>
        <button><i className="fa-solid fa-house-chimney fa-xl"></i></button>
        <button onClick={()=>{toggleFav()}}><i className="fa-regular fa-heart fa-xl"></i></button>
        <button onClick={()=>{toggleCart()}}><i className="fa-solid fa-bag-shopping fa-xl"></i></button>
      </div>
    </>
  )
}

export default Menubar
// 
//  onClick={()=>{setSidebar(true);setisMenu(false)}}