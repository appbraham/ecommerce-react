import { createContext, useState } from "react";
// import { IProduct } from "../types/product";
import { ICart } from '../types/cart';

interface ShoppingCartContextType {
    cart: ICart[];
    setCart: React.Dispatch<React.SetStateAction<ICart[]>>;
    addToCart: (cart: ICart) => void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>(
    {} as ShoppingCartContextType
);

interface ShoppingCartProviderProps {
    children: React.ReactNode;
}

export const ShoppingCartProvider = ( {children}: ShoppingCartProviderProps ) => {

    const [cart, setCart] = useState<ICart[]>([]);
    const addToCart = (cartProducts:ICart) => {
        setCart( (prevCartProducts) => [ ...prevCartProducts, cartProducts ]);
    }

    return (
        <ShoppingCartContext.Provider value={{cart, setCart, addToCart}} >
            {children}
        </ShoppingCartContext.Provider>
    )
}