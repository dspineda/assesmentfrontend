import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { getProduct } from '../services/products';


const Productpage = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		const fetchProduct = async () => {
			const data = await getProduct(id);
			setProduct(data);
		};
		fetchProduct();
	}, []);

	return (
		<div>
			<Navbar />
			<section className='product'>
				<div className='product__container'>
					<img className='product__container__img' src={product.image}></img>
				</div>

				<div className='product__containerb'>
					<p className='product__container__category'>
						category: {product.category}
					</p>
					<h2 className='product__container__title'>{product.title}</h2>
					<p className='product__container__description'>
						<strong>Description: </strong>
						{product.description}
					</p>
					<p className='product__container__price'>Price: ${product.price}</p>
					<hr></hr>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Productpage;

Productpage.propTypes = {
	product: PropTypes.shape(),
};
Productpage.defaultProps = {
	product: {},
};
