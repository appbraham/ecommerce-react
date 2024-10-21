import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../types/product";
import { API_URL } from "../../utils";
import { ShoppingCartContext } from '../../context/index';
import Rating from "../../components/Rating";

const ProductDetail = () => {

  const [products, setProducts] = useState<IProduct[]>([]);

  const context = useContext(ShoppingCartContext)

  useEffect( () => {
    fetch(`${API_URL}/products?offset=0&limit=10`).then(response => {
      response.json().then( data => setProducts(data));
    })
  }, []);

  console.log(products, 'Lista de productos');  

  // Obtener el parámetro 'id' desde la URL
  const { productId } = useParams();

  // Convertir el id en número para buscar en el array (useParams devuelve strings)
  const product = products.find((product) => product.id === Number(productId));

  // Si el producto no existe, mostrar un mensaje
  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }
  

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col gap-8 px-4">
      <div className="rounded-2xl overflow-hidden flex flex-col gap-2">
        <img src={product.images[0]} alt={product.title} />
        <div className="flex gap-2 overflow-auto">
          {
            products.map( (product, i) => <img className="max-w-24 rounded-2xl object-cover" src={product.images[i]} alt={product.title} /> )
          }
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="font-integral text-2xl md:text-3xl">{product.title}</h2>
        <Rating />
        <p className="font-satoshi text-2xl font-bold md:text-3xl">${product.price}</p>
        <p>{product.description}</p>
      </div>
      
      {/* Usando conext api */}
      {/* <h2>{context.count}</h2>
      <button 
        className="rounded-full px-4 py-2 bg-black text-white"
        onClick={ () => context.setCount(++context.count) }>
          Agregar al carrito
      </button>
      <button 
        className="rounded-full px-4 py-2 bg-gray-200"
        onClick={ () => context.setCount(--context.count) }>
        Quitar del carrito
      </button> */}
    </div>
  );
};

export default ProductDetail;