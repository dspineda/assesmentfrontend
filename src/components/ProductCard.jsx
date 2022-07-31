import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/product.css';
import TimerProduct from './TimerProduct';

const ProductCard = props => {
	const { product } = props;
	const navigate = useNavigate();
	const [intro, setIntro] = useState(true);

	function hadleIntro() {
		if (intro) {
			navigate('/product/' + product.id, { replace: true });
		}
	}

	return (
		<article className='productCard'>
			<TimerProduct setIntro={setIntro} />
			<div className='productCard__detail'>
				<img className='productCard__detail__img' src={product.image} />
			</div>

			<div>
				<h3 className='productCard__detail__title'>{product.title}</h3>
			</div>
			<div className='productCard__detail__buttom'>
				<button onClick={hadleIntro}>Details</button>
			</div>
		</article>
	);
};

export default ProductCard;

ProductCard.propTypes = {
	product: PropTypes.shape(),
};
ProductCard.defaultProps = {
	product: {},
};
