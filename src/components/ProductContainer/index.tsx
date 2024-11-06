import { useEffect, useState } from "react";
import { API_URL } from "../../utils";
import ProductCard from "../ProductCard";
import { IProduct } from "../../types/product";
import ButtonView from "../ButtonView";

interface Props {
  title: string;
  label: string;
  showButton?: boolean; 
}

const ProductContainer = ( {title, label, showButton=true}:Props ) => {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect( () => {
    fetch(`${API_URL}/products?offset=0&limit=4`).then(response => {
      response.json().then( data => setProducts(data));
    })
  }, []);

  return (    
    <div className="max-w-[1440px] mx-auto my-16 flex flex-col gap-4">
      <h2 className="font-integral text-4xl text-center mb-6 lg:text-5xl">{title}</h2>
      <div className="flex gap-12 py-4 overflow-x-auto">
        {
          products.map( (product: IProduct) => (            
            <ProductCard key={product.id} {...product} />
          ))
        }
      </div>
      <ButtonView label={label} visible={showButton}/>
    </div>
  )
}

export default ProductContainer