import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../types/product";
import { API_URL } from "../../utils";
// import { ShoppingCartContext } from '../../context/index';
import Rating from "../../components/Rating";
import Divider from "../../components/Divider";
import ColorPicker from "../../components/ColorPicker";
import SizePicker from "../../components/SizePicker";
import AddCart from "../../components/AddCart";
import Tab from "../../components/Tab";
import ProductContainer from "../../components/ProductContainer";
import { ICart } from "../../types/cart";

const ProductDetail = () => {

  const customColors = ['#4F4631', '#314F4A', '#31344F'];
  const customSizes = ["Small","Medium","Large","X-Large"];

  const [products, setProducts] = useState<IProduct[]>([]);

  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const [indexImage, setIndexImage] = useState<number>(0);  

  // const context = useContext(ShoppingCartContext)

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

  const addColor = (selectedColor:string) => {
    setColor(selectedColor);
  }

  const addSize = (selectedSize:string) => {
    setSize(selectedSize);
  }

  const addQuantity = (selectedQuantity: number) => {
    setQuantity(selectedQuantity);
  }

  const cart:ICart = {id:"C1", product, quantity, color, size}



  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <section className="flex flex-col gap-6  md:flex-row xl:py-4 xl:gap-8">
        <div className="flex flex-col gap-4 md:flex-col xl:flex-row-reverse">

          <div className="xl:w-3/4" >
            <img className="rounded-2xl object-cover xl:h-full" src={product.images[indexImage]} alt={product.title} />
          </div>

          <div className="flex justify-between gap-4 sm:justify-center xl:flex-col xl:w-1/4">
            {
              product.images.map( (url, index) => (
              <div key={product.id} className="rounded-2xl overflow-hidden hover:cursor-pointer hover:ring-4 xl:h-full">
                <img src={url} alt={product.title} onClick={() => setIndexImage(index)} className="object-cover rounded-2xl transition-transform duration-300 hover:scale-105 xl:h-full"/>
              </div>))
            }
          </div>

        </div>
        
        <div className="flex flex-col gap-4 lg:gap-6">      
          <div className="space-y-2">
            <h2 className="font-integral text-2xl md:text-3xl">{product.title}</h2>
            
            <Rating rating={4.6}/>

            <p className="text-2xl font-bold md:text-3xl">${product.price}</p>
            <p className="text-black/60">{product.description}</p>
          </div>

          <Divider />

          <div className="flex flex-col gap-3 lg:gap-4">
            <span className="text-black/60">Select Color</span>

            <ColorPicker colors={customColors} sendColor={addColor}/>

          </div>

          <Divider />

          <div className="flex flex-col gap-6 lg:gap-6">
            <span className="text-black/60">Choose Size</span>

            <SizePicker sizes={customSizes} sendSize={addSize}/>
            
          </div>

          <Divider />
          
          <AddCart {...cart} sendQuantity={addQuantity}/>

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
      </section>

      <section className="my-8">
        <Tab />
      </section>

      <ProductContainer title="You might also like" label="Load more" showButton={false}/>
    </div>
  );
};

export default ProductDetail;