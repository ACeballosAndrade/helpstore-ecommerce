import { useEffect } from "react";
import MetaTitle from "../components/header/MetaTitle";
import MySlider from "../components/slider/MySlider";
import Services from "../services/Services";
import { Col, Container, Row } from "reactstrap";
import "../styles/home.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/slices/product/thunks";
import ProductColection from "../components/UI/ProductColection";

const Home = () => {
  const dispatch = useDispatch();
  const { products = [], isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    console.log(products);
  }, []);

  let slides = [
    "https://res.cloudinary.com/dfpfnqwyq/image/upload/v1713055630/HelpPeople/D_NQ_844137-MLA75456688700_042024-OO_aubcrh.jpg",
    "https://res.cloudinary.com/dfpfnqwyq/image/upload/v1713055628/HelpPeople/D_NQ_711096-MLA75146948196_032024-OO_low8wf.jpg",
    "https://res.cloudinary.com/dfpfnqwyq/image/upload/v1713055627/HelpPeople/D_NQ_603230-MLA74675320600_022024-OO_yfz5p4.jpg",
  ];
  let slidesMobile = [
    "https://res.cloudinary.com/dfpfnqwyq/image/upload/v1713146413/HelpPeople/MB_NQ_784743-MLA73837041273_012024-F_ajpl85.jpg",
    "https://res.cloudinary.com/dfpfnqwyq/image/upload/v1713146413/HelpPeople/MB_NQ_963541-MLA75456688640_042024-F_kvvsq2.jpg",
    "https://res.cloudinary.com/dfpfnqwyq/image/upload/v1713146413/HelpPeople/MB_NQ_921532-MLA75146948154_032024-F_zebusw.jpg",
  ];

  return (
    <MetaTitle title={"Home"}>
      <section className="banner__section">
        <div className="dk_slider">
          <MySlider slides={slides} />
        </div>
        <div className="mb_slider">
          <MySlider slides={slidesMobile} />
        </div>
      </section>
      <Services />
      <section className="cat__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title_c">Productos Destacados</h2>
            </Col>
            <ProductColection products={products} />
          </Row>
        </Container>
      </section>
    </MetaTitle>
  );
};

export default Home;
