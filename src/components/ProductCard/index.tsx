import productImage from '../../assets/product.png';

interface IProduct{
    name: string;
    originalPrice: number;
    discount?: number;
}

const ProductCard = ({ name, originalPrice, discount = 0}: IProduct) => {

    const calcDiscount = () =>{
        return originalPrice - (originalPrice * discount)/ 100;
    }

    const renderProductInfo = () => {
        if(discount !== 0){
            return (
                <>
                    <span className='font-bold text-2xl'>${ calcDiscount() }</span>         
                    <span className='font-bold text-2xl line-through text-black/40'>${originalPrice}</span>            
                    <span className='text-xs font-medium text-red-600 bg-red-100 py-1 px-2 rounded-full relative top-0.5'>-{discount}%</span>         
                </>
            );
        }

        return <span className='font-bold text-2xl'>${originalPrice}</span>;
    };

  return (
    <div>
        <div className="image">
            <img className='max-w-52 rounded-2xl' src={productImage} alt="T-Shirt" />
        </div>
        <div className="info"></div>
        <p className='font-bold text-xl'>{name}</p>
        <p className='flex items-center gap-2'>
            { renderProductInfo() }     
        </p>
    </div>
  )
}

export default ProductCard;
