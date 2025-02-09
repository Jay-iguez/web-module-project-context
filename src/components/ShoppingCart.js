import React, { useContext } from 'react';
import { CartContext } from '../context/Cart_Context';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const context = useContext(CartContext)
	const { cart, removeItem } = context

	console.log(cart)

	console.log()

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(book => {
				return <Item key={book.id} item={book} removeItem={removeItem} />
			})}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
