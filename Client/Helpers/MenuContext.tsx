import React, { createContext, useState, ReactNode } from 'react';

// Define the type for the Menu state
interface MenuState {
  cart: boolean;
  fav: boolean;
  sidebar: boolean;
  sidebarType: string;
}

// Define the type for the context value
interface MenuContextProps {
  menu: MenuState;
  toggleCart: () => void;
  toggleFav: () => void;
  toggleSidebar: () => void;
  setSidebarType: (type: string) => void;
}

// Create a Context with a default value
export const MenuContext = createContext<MenuContextProps | undefined>(undefined);

// Create a Provider component
interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [menu, setMenu] = useState<MenuState>({ cart: false, fav: false, sidebar: false, sidebarType: "menu" });

  const toggleCart = () => setMenu(prevMenu => ({ ...prevMenu, cart: !prevMenu.cart }));
  const toggleFav = () => setMenu(prevMenu => ({ ...prevMenu, fav: !prevMenu.fav }));
  const toggleSidebar = () => setMenu(prevMenu => ({ ...prevMenu, sidebar: !prevMenu.sidebar }));
  const setSidebarType = (type: string) => setMenu(prevMenu => ({ ...prevMenu, sidebarType: type }));

  return (
    <MenuContext.Provider value={{ menu, toggleCart, toggleFav, toggleSidebar, setSidebarType }}>
      {children}
    </MenuContext.Provider>
  );
};

// Custom hook for using the MenuContext
export const useMenu = (): MenuContextProps => {
  const context = React.useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};