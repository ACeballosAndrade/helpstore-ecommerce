import { Container, Row, Col } from "reactstrap";
import {
  PiTruck,
  PiChatsFill,
  PiShieldCheckLight,
  PiCardholderLight,
} from "react-icons/pi";
import "./services.css";
import serviceData from "../assets/data/serviceData";
import { motion } from "framer-motion";

const iconComponents = {
  PiTruck,
  PiChatsFill,
  PiShieldCheckLight,
  PiCardholderLight,
};

const Services = () => {
  return (
    <section className="_services">
      <Container>
        <Row>
          {serviceData.map((card, index) => {
            const IconComponent = iconComponents[card.icon];
            return (
              <Col lg="3" md="4" key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="service_item"
                >
                  <IconComponent className="_icon_services" />
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.subTitle}</p>
                  </div>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
