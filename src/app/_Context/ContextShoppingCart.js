'use client'

import { createContext, useContext, useState } from "react";






export const ShoppingCartContext = createContext({});


export const ShoppingCartProvider = ({children}) => {
    const [cart , setCart] = useState([]);
    const [openCart , setOpenCart] = useState(false);
    const getTotalPrice = ()=> {
        let totalPrice = 0;
        cart.forEach((item)=> {
            totalPrice += Number(item.product?.attributes?.price)
        })
        return totalPrice;
    };
    
    return (
    <ShoppingCartContext.Provider value={{cart , setCart, openCart , setOpenCart , getTotalPrice}}>
        {children}
    </ShoppingCartContext.Provider>)
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}
