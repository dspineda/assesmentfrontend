import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/product.css';

const ProductCard = (props) => {
  const {product} = props;
  return(
    <article className="productCard">
      <div className="productCard__detail">
        <Link to={`/product/${product.id}`}><h2>Detail</h2></Link>
        <img src={product.image} />
        <h3>{product.title}</h3>
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



