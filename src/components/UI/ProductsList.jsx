import ProductCard from "./ProductCard"

const ProductsList = ({products}) => {
  return (
    <>
    {
       products.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))
    }
    </>
  )
};


export default ProductsList