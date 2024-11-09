import { createContext, useState } from "react";
// import { IProduct } from "../types/product";
import { ICart } from '../types/cart';

interface ShoppingCartContextType {
    // color: string;
    // setColor: React.Dispatch<React.SetStateAction<string>>;
    // addColorProduct: (color:string) => void;
    // size: string;
    // setSize: React.Dispatch<React.SetStateAction<string>>;
    // addSizeProduct: (color:string) => void;
    cart: ICart[];
    setCart: React.Dispatch<React.SetStateAction<ICart[]>>;
    addToCart: (cart: ICart) => void;
    // addToCart: (cart: IProduct, quantity: number, color:string, size:string) => void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>(
    {} as ShoppingCartContextType
);

interface ShoppingCartProviderProps {
    children: React.ReactNode;
}

export const ShoppingCartProvider = ( {children}: ShoppingCartProviderProps ) => {

    const [cart, setCart] = useState<ICart[]>([]);

    // const [color, setColor] = useState<string>("");
    // const [size, setSize] = useState<string>("Small");
    // const addColorProduct = (colorParam:string) => {
    //     setColor(colorParam);
    // }
    // const addSizeProduct = (sizeParam:string) => {
    //     setSize(sizeParam);
    // }



    // const addToCart = (product: IProduct, quantity: number, color:string, size:string) => {
    //     setCart( () => [ ...cart, {product, quantity, color, size} ]);
    // }
    const addToCart = (cartProducts:ICart) => {
        setCart( (prevCartProducts) => [ ...prevCartProducts, cartProducts ]);
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