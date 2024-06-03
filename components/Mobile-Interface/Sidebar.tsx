import React,{useEffect, useState} from 'react'
import MenuType from './SidebarType/MenuType';
import CategoryType from './SidebarType/CategoryType';
import { useMenu } from '@/Helpers/MenuContext';
const Sidebar = () => {
    const {menu, toggleSidebar} = useMenu()
    const [overlayColor, setOverlayColor] = useState('rgba(255, 255, 255, 0)'); // Initial color is transparent white

    useEffect(() => {
        if (menu.sidebar) {
            // After 100ms, change the overlay color to black
            const timer = setTimeout(() => {
                setOverlayColor('rgba(0, 0, 0, 0.5)'); // Change color to semi-transparent black
            }, 100);

            return () => clearTimeout(timer);
        } else {
            // Reset the overlay color to transparent white when sidebar is closed
            setOverlayColor('rgba(255, 255, 255, 0)');
        }
    }, [menu.sidebar]);
    return (
        <>
        {menu.sidebar && (
                <div className="fixed top-0 left-0 h-full w-full z-50">
                    <div 
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                            backgroundColor: overlayColor,
                            transition: 'background-color 0.3s ease'
                        }}
                        onClick={toggleSidebar}
                    ></div>
                </div>
            )}
        <div className={`flex flex-col p-4 items-center fixed w-[320px] bg-white h-full left-0 z-50 gap-5 lg:hidden overflow-y-auto transform transition-transform duration-500 ease-in-out ${menu.sidebar ? 'translate-x-0' : '-translate-x-full'}`}>
            {menu.sidebarType==="menu" && <MenuType/>}
            {menu.sidebarType==="category" && <CategoryType/>}
        </div>
        </>
    )
    
}

export default Sidebar