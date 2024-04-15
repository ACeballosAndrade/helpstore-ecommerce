
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';


const ProductColection = ({products}) => {
  // Usamos slice para obtener solo los primeros 4 elementos
  const limitedProducts = products.slice(0, 4);

  return (
    <>
      {limitedProducts.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </>
  );
};

ProductColection.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductColection