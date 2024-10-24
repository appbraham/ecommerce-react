import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../types/product";
import { API_URL } from "../../utils";
import { ShoppingCartContext } from '../../context/index';
import Rating from "../../components/Rating";
import Divider from "../../components/Divider";

const ProductDetail = () => {

  const [products, setProducts] = useState<IProduct[]>([]);

  const context = useContext(ShoppingCartContext)

  useEffect( () => {
    fetch(`${API_URL}/products?offset=0&limit=10`).then(response => {
      response.json().then( data => setProducts(data));
    })
  }, []);


  // Obtener el parámetro 'id' desde la URL
  const { productId } = useParams();

  // Convertir el id en número para buscar en el array (useParams devuelve strings)
  const product = products.find((product) => product.id === Number(productId));

  // Si el producto no existe, mostrar un mensaje
  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }
  

  return (
    <section className="max-w-[1440px] mx-auto flex flex-col gap-6 px-4 pb-12">
      <div className="flex flex-col gap-2 sm:gap-4">
        <img className="rounded-2xl" src={product.images[0]} alt={product.title} />
        <div className="flex justify-between gap-2 overflow-auto sm:justify-center sm:gap-4">
          {
            product.images.map( url => <img key={product.id} className="max-w-28 rounded-2xl object-cover" src={url} alt={product.title}/>)
          }
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="font-integral text-2xl md:text-3xl">{product.title}</h2>
        <Rating />
        <p className="text-2xl font-bold md:text-3xl">${product.price}</p>
        <p className="text-black/60">{product.description}</p>
      </div>

      <Divider />

      <div className="flex flex-col gap-3">
        <span className="text-black/60">Select Color</span>
        <div className="flex gap-4">
          <span className="size-10 bg-stone-700 rounded-full"></span>
          <span className="size-10 bg-lime-700 rounded-full"></span>
          <span className="size-10 bg-green-950 rounded-full"></span>
        </div>
      </div>

      <Divider />

      <div className="flex flex-col gap-3">
        <span className="text-black/60">Choose Size</span>
        <div className="flex justify-between items-center gap-2 flex-wrap">
          <button className="bg-gray-200 text-sm text-black/60 font-medium rounded-full px-5 py-2">Small</button>
          <button className="bg-gray-200 text-sm text-black/60 font-medium rounded-full px-5 py-2">Medium</button>
          <button className="bg-black text-sm text-white font-medium rounded-full px-4 py-2">Large</button>
          <button className="bg-gray-200 text-sm text-black/60 font-medium rounded-full px-5 py-2">X-Large</button>
        </div>
      </div>

      <Divider />
      
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
    </section>
  );
};

export default ProductDetail;