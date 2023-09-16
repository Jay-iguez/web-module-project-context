import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './context/Product_Context';

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

	const contextState = { products: products, cart: cart, addItem: addItem}

	return (
		<div className="App">
			<ProductContext.Provider value={contextState}>
				<Navigation cart={contextState.cart} />

				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart cart={contextState.cart} />
				</Route>
			</ProductContext.Provider>

		</div>
	);
}

export default App;
