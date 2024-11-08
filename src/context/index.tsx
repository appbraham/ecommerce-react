import { createContext, useState } from "react";
import { IProduct } from "../types/product";
import { ICart } from '../types/cart';

interface ShoppingCartContextType {
    cart: ICart[];
    setCart: React.Dispatch<React.SetStateAction<ICart[]>>;
    addToCart: (cart: IProduct, quantity: number) => void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>(
    {} as ShoppingCartContextType
);

interface ShoppingCartProviderProps {
    children: React.ReactNode;
}

export const ShoppingCartProvider = ( {children}: ShoppingCartProviderProps ) => {

    const [cart, setCart] = useState<ICart[]>([]);

    const addToCart = (product: IProduct, quantity: number) => {
        setCart( () => [ ...cart, {product, quantity} ]);
    }

    return (
        <ShoppingCartContext.Provider value={{cart, setCart, addToCart}} >
            {children}
        </ShoppingCartContext.Provider>
    )
}



// old

// interface ShoppingCartContextType {
//     count: number;
//     setCount: React.Dispatch<React.SetStateAction<number>>;
//     cartProducts: IProduct[];
//     setCartProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
//     addProduct: (product: IProduct) => void;
// }

// export const ShoppingCartContext = createContext<ShoppingCartContextType>(
//     {} as ShoppingCartContextType 
// );

// interface ShoppingCartProviderProps {
//     children: React.ReactNode;
// }

// export const ShoppingCartProvider = ( {children}: ShoppingCartProviderProps ) => {
    
//     const [count, setCount] = useState<number>(0);

//     const [cartProducts, setCartProducts] = useState<IProduct[]>([]);

//     const addProduct = (product: IProduct) => {
//         setCartProducts( (prevCartProducts) => [...prevCartProducts, product] )
//     }

//     return (
//         <ShoppingCartContext.Provider value={{count, setCount, cartProducts, setCartProducts, addProduct}} >
//             {children}
//         </ShoppingCartContext.Provider>
//     )
// }