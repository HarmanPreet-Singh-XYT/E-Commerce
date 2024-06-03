import React from 'react'
import MenuType from './SidebarType/MenuType';
import CategoryType from './SidebarType/CategoryType';
import { useMenu } from '@/Helpers/MenuContext';
const Sidebar = () => {
    const {menu} = useMenu()
    return (
        <div className='flex flex-col p-4 items-center fixed w-[320px] bg-white h-full left-0 z-50 gap-5 lg:hidden overflow-y-auto'>
            {menu.sidebarType==="menu" && <MenuType/>}
            {menu.sidebarType==="category" && <CategoryType/>}
        </div>
    )
    
}

export default Sidebar