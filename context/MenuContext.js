'use client'
import { createContext, useState} from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const openMenu = () => {
        setMenuIsOpen(true);
        console.log(menuIsOpen);
    }

    const closeMenu = () => {
        setMenuIsOpen(false);
    }

    return (
        <MenuContext.Provider value={{ menuIsOpen, openMenu, closeMenu }}>
            {children}
        </MenuContext.Provider>
    )
}