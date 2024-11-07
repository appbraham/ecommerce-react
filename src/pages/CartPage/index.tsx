import { useContext } from 'react'
import { ShoppingCartContext } from '../../context';

const CartPage = () => {

    const context = useContext(ShoppingCartContext);

  return (
    <div>
        <h2>CartPage</h2>
        <div>
            {
                context.cartProducts.map((product) => (
                    <>
                        <p>{product.title}</p>
                        <p>{context.count}</p>
                    </>
                ))
            }
        </div>
    </div>
  )
}

export default CartPage