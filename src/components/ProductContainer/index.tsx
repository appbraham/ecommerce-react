import { useEffect, useState } from "react";
import { API_URL } from "../../utils";
import ProductCard from "../ProductCard";
import { IProduct } from "../../types/product";
import ButtonView from "../ButtonView";

interface Props {
  title: string;
}

const ProductContainer = ( {title}:Props ) => {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect( () => {
    fetch(`${API_URL}/products?offset=0&limit=4`).then(response => {
      response.json().then( data => setProducts(data));
    })
  }, []);

  return (    
    <div className="max-w-[1440px] mx-auto px-4 my-16 flex flex-col gap-12">
      <h2 className="font-integral text-4xl text-center lg:text-5xl">{title}</h2>
      <div className="flex gap-12 py-4 overflow-x-auto">
        {
          products.map( (product: IProduct) => (            
            <ProductCard key={product.id} {...product} />
          ))
        }
      </div>
      <ButtonView />
    </div>
  )
}

export default ProductContainer