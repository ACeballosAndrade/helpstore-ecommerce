import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";
import MetaTitle from "../components/header/MetaTitle";
import { GoSearch } from "react-icons/go";
import "../styles/category.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getProducts,
  getProductsByCat,
  getProductsByTitle,
} from "../store/slices/product/thunks";
import ProductsList from "../components/UI/ProductsList";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { products = [], isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    console.log(products);
  }, []);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    dispatch(getProductsByCat(filterValue));
  };

  const hadleSearch = (e) => {
    const searchTerm = e.target.value;

    dispatch(getProductsByTitle(searchTerm));
  };

  return (
    <MetaTitle title="Categoría">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row className="__filters">
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filtrar por categoría</option>
                  <option value="1">Clothes</option>
                  <option value="2">Electronics</option>
                  <option value="3">Furniture</option>
                  <option value="4">Shoes</option>
                  <option value="5">Miscellaneous</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select>
                  <option>Ordenar por</option>
                  <option value="1">Acendente</option>
                  <option value="2">Descendente</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Buscar..."
                  onChange={hadleSearch}
                />
                <GoSearch className="_search_icon" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {products.length === 0 ? (
              <h1 className="text-center fs-4">
                No hay productos para mostrar
              </h1>
            ) : (
              <ProductsList products={products} />
            )}
          </Row>
        </Container>
      </section>
    </MetaTitle>
  );
};

export default CategoryPage;
