import { useContext } from 'react'
import { ShoppingCartContext } from '../../context';

const CartPage = () => {

    const context = useContext(ShoppingCartContext);

  return (
    <div>
        <h2>CartPage</h2>
        <div>
            {
                context.cart.map( (cart, index) => (
                    <div key={index}>
                        <p>{cart.product.title}</p>
                        <p>{cart.quantity}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CartPage