import { Link } from "react-router-dom";
import Rating from "../Rating";
import { IProduct } from "../../types/product";

const ProductCard = ({ id, title, images, price}: IProduct) => {
    

  return (
    <div className="flex flex-col gap-1 lg:gap-2">
        
        <Link to={`/products/${id}`}>
            <img className='min-w-52 max-w-full rounded-2xl' src={images[0]} alt={title} />
        </Link>        
        <Link to={`/products/${id}`}>
            <p className='font-bold text-base md:text-xl'>{title}</p>
        </Link>
        <Rating rating={4.2} />
        <span className='font-bold text-2xl'>${price}</span>
    </div>
  )
}

export default ProductCard;
