import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/products';
import '../styles/home.css';

const Homepage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const data = await getProducts();
			setProducts(data);
		};
		fetchProducts();
	}, []);

	return (
		<div>
			<Navbar />
			<div className='container'>
				<ul className='listProducts'>
					{products.map(product => (
						<li key={product.id}>
							<ProductCard product={product} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Homepage;
