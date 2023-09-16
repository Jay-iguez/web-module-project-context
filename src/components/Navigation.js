import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/Cart_Context';

const Navigation = () => {
	const cart = useContext(CartContext).cart

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
