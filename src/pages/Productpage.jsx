import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom'
import Navbar from "../components/Navbar";
import { useState, useEffect } from 'react';
import { getProduct } from "../services/products";


const Productpage = () => {
	const { id } = useParams();
	const [product, setProduct] = useState ({});
	useEffect(()=> {
		const fetchProduct = async() => {
			const data = await getProduct(id);
			setProduct(data)
		}
			fetchProduct();

	},[])

	return (		
		<div>
			<Navbar />
				<div className="product">
					<img src={product.image}></img>
					<h2>{product.title}</h2>
					<p>{product.description}</p>
					<p>{product.price}</p>
					<p>{product.category}</p>
				</div>
		</div>
	);
};

export default Productpage;

Productpage.propTypes = {
  product: PropTypes.shape(),
}
Productpage.defaultProps = {
  product: {},
}
