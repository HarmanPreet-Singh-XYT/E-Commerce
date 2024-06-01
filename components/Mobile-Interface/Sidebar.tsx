import React from 'react'
import { useAppSelector } from '@/app/hooks';
import MenuType from './SidebarType/MenuType';
import CategoryType from './SidebarType/CategoryType';
const Sidebar = () => {
    const state = useAppSelector((state) => state.sidebarType.value)
    return (
        <div className='flex flex-col p-4 items-center fixed w-[320px] bg-white h-full left-0 z-50 gap-5 lg:hidden overflow-y-auto'>
            {state==="menu" && <MenuType/>}
            {state==="category" && <CategoryType/>}
        </div>
    )
    
}

export default Sidebar