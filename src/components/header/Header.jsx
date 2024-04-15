import { Container, Row } from "reactstrap";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { PiShoppingCart, PiUser, PiListBold } from "react-icons/pi";
import "./header.css";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const nav_link = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "category",
    display: "Categoría",
  },
  {
    path: "cart",
    display: "Carrito",
  },
];

const Header = () => {

  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky__header");
      }else{
        headerRef.current.classList.remove("sticky__header")
      }
    })
  };

  useEffect(() => {
   stickyHeaderFunc();
   return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle('active__menu')

  const navigateToCart = () => {
    navigate('/cart')
  }
  

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" onClick={() => navigate('/')} />
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav_link.map((link, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="_icons">
                <PiUser className="r_icons" />
              </span>
              <span className="_icons">
                <PiShoppingCart className="r_icons" onClick={navigateToCart} />
                <span className="_badge">{totalQuantity}</span>
              </span>
              <div className="mobile__menu">
              <PiListBold onClick={menuToggle} />
            </div>
            </div>

            
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
