import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import SocialFollow from "./SocialFollow";

const Footer = () => {
  return (
    <footer className="main-footer ">
      <Container>
        <Row>
          <SocialFollow />
          <br />
          <Col className="text-center py-3">
            Copyright &copy;{new Date().getFullYear()} Serangan Fajar | All
            rights reserved | Terms Of Service | Privacy
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
