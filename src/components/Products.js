import React, { useContext } from 'react';
import { ProductContext } from '../context/Product_Context';

// Components
import Product from './Product';

const Products = props => {
	const context = useContext(ProductContext)
	const { products, addItem } = context
	
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
