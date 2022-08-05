import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TimerProduct from './TimerProduct';

const ProductCard = ({ product }) => {
	const navigate = useNavigate();
	const [intro, setIntro] = useState(true);
	const [buttonStyle, setButtonStyle] = useState(
		'productCard__detail__buttom button'
	);
	const [buttonText, setButtonText] = useState('Details');

	const hadleIntro = () => {
		if (intro) {
			navigate('/product/' + product.id, { replace: true });
		}
	};

	useEffect(() => {
		const changeColorButton = () => {
			if (!intro) {
				setButtonStyle('productCard__detail__buttom__unstyle button ');
				setButtonText('Finished');
			}
		};
		changeColorButton();
	}, [intro]);

	return (
		<article className='productCard'>
			<div className='productCard__detail'>
				<img className='productCard__detail__img' src={product.image} />
			</div>

			<div>
				<h3 className='productCard__detail__title'>{product.title}</h3>
			</div>
			<div className={buttonStyle}>
				<button onClick={hadleIntro}>{buttonText}</button>
				{intro ? <TimerProduct setIntro={setIntro} /> : undefined}
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
