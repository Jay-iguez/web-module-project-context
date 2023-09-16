import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './context/Product_Context';
import { CartContext } from './context/Cart_Context';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		const appendedItemToCart = [...cart, item]
		setCart(appendedItemToCart)
	};

	const productState = { products: products, addItem: addItem}
	const cartState = {cart: cart}

	return (
		<div className="App">
			<ProductContext.Provider value={productState}>
				<CartContext.Provider value={cartState}>

				<Navigation />

				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
				</CartContext.Provider>
			</ProductContext.Provider>

		</div>
	);
}

export default App;
