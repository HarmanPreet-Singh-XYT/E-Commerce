import React from 'react'
import { useAppDispatch,useAppSelector } from '@/app/hooks';
import { openSidebar } from '@/features/UIUpdates/UISlice';
import { menuSidebar, categorySidebar } from '@/features/UIUpdates/SidebarType';
import { openCart } from '@/features/UIUpdates/CartUI';
import Sidebar from './Sidebar';
const Menubar = () => {
  const state = useAppSelector((state:any) => state.sidebar.value)
  const dispatch = useAppDispatch()
  return (
    <>
      {state && <Sidebar/>}
      <div className='flex fixed bg-white h-14 bottom-0 z-40 justify-evenly shadow-top min-w-[230px] w-full max-w-[500px] flex-shrink-1 rounded-t-xl lg:hidden'>
        <button onClick={()=>{dispatch(openSidebar());dispatch(menuSidebar())}}><i className="fa-solid fa-bars fa-xl"></i></button>
        <button onClick={()=>{dispatch(openSidebar());dispatch(categorySidebar())}}><i className="fa-solid fa-layer-group fa-xl"></i></button>
        <button><i className="fa-solid fa-house-chimney fa-xl"></i></button>
        <button><i className="fa-regular fa-heart fa-xl"></i></button>
        <button onClick={()=>{dispatch(openCart())}}><i className="fa-solid fa-bag-shopping fa-xl"></i></button>
      </div>
    </>
  )
}

export default Menubar
// 
//  onClick={()=>{setSidebar(true);setisMenu(false)}}