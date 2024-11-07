import { createContext, useState } from "react";
import { IProduct } from "../types/product";

interface ShoppingCartContextType {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    cartProducts: IProduct[];
    setCartProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
    addProduct: (product: IProduct) => void;
}


// interface ShoppingCartContextType {
//     count: number;
//     setCount: React.Dispatch<React.SetStateAction<number>>;
//     product: IProduct;
//     setProduct: React.Dispatch<React.SetStateAction<IProduct>>;
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
//         setCartProducts( (cartProducts) => [...cartProducts, product])
//     }

//     return (
//         <ShoppingCartContext.Provider value={{count, setCount, product, setProduct, addProduct}} >
//             {children}
//         </ShoppingCartContext.Provider>
//     )
// }


export const ShoppingCartContext = createContext<ShoppingCartContextType>(
    {} as ShoppingCartContextType 
);

interface ShoppingCartProviderProps {
    children: React.ReactNode;
}

export const ShoppingCartProvider = ( {children}: ShoppingCartProviderProps ) => {
    
    const [count, setCount] = useState<number>(0);

    const [cartProducts, setCartProducts] = useState<IProduct[]>([]);

    const addProduct = (product: IProduct) => {
        setCartProducts( () => [...cartProducts, product])
    }

    return (
        <ShoppingCartContext.Provider value={{count, setCount, cartProducts, setCartProducts, addProduct}} >
            {children}
        </ShoppingCartContext.Provider>
    )
}