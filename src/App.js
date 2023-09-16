import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './context/Product_Context';
import { CartContext } from './context/Cart_Context';
import { useLocalStorage } from './customHook/useLocalStorage'
 
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useLocalStorage('bookData', data);
	const [cart, setCart] = useLocalStorage('cartData', []);

	const referenceLocalStorage = (value, key, action) => {

		switch (action) {
			case 'append':
				const localStorageValue = window.localStorage.getItem(key)

				if (localStorageValue) {
					const finalResult = JSON.parse(localStorageValue)
					return finalResult
				} else {
					window.localStorage.setItem(key, JSON.stringify(value))
					return value
				}

			case 'remove':
				window.localStorage.removeItem(key)
		}
	
	}

	const addItem = item => {
		const storageItem = referenceLocalStorage(item, item.id, 'append')
		const appendedItemToCart = [...cart, storageItem]
		setCart(appendedItemToCart)
	};

	const removeitem = item => {
		referenceLocalStorage(item, item.id, 'remove')
  		const removedItemFromCart = cart.filter(book => book.id !== item.id)
		setCart(removedItemFromCart)
	}

	const productState = { products: products, addItem: addItem }
	const cartState = { cart: cart, removeItem: removeitem }

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
