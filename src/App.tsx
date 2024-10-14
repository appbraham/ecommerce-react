import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';

function App() {
  return (
     <>
      {/* <h1>Soy un título</h1>
      <Button label="Shop Now" bgColor="bg-black text-white rounded-full" fontColor="" bdrRadius=""/>
      <Button label="View All" bgColor="white" fontColor="black" bdrRadius="none"/> */}
      <h1 className='font-integral text-6xl'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
      <p className='font-satoshi text-xl'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

      <ProductCard name={"Polo gris"} originalPrice={260} discount={20} />
      <ProductCard name={"Polo verde"} originalPrice={210} />
      <ProductCard name={"Polo azul"} originalPrice={210} discount={25} />
      
      <Link to={"boton"}>Ir a boton</Link> 
     </>
  )
}

export default App
