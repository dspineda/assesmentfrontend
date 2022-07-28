import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/product.css';

const ProductCard = (props) => {
  const {product} = props;
  return(
    <article className="productCard">
      <div className="productCard__detail">
        <img className="productCard__detail__img" src={product.image} />
      </div> 

      <div>
        <h3 className="productCard__detail__title">{product.title}</h3>
      </div>
      <div className="productCard__detail__buttom">
        <Link to={`/product/${product.id}`}><h2>Detail</h2></Link>
      </div>
    </article>
  )
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape(),
}
ProductCard.defaultProps = {
  product: {},
}



