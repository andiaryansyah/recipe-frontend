import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Silde1 from "../../assets/img/slide1.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
    <Container>
      <Row className="mt-5 mb-5">
        <Col className="hero mt-4">
   
        <img src={Silde1} alt="breakfast" width={600}/>
      </Col>
      <Col className="about mb-2">
        <h1>About</h1>
        <p className="mb-3">
          Cooking is one of the best creative hobbies for stress-relief. If you
          are an experienced cook or a beginner, these five sites will help you
          approach your recipes in unique ways. Cooking is chemistry, only
          delicious. You might think this traditionally domestic pursuit isn't
          geeky, but you're wrong: combining cheap ingredients into a delicious
          meal is the ultimate life hack.{" "}
        </p>
        <p>
          Today YouCanMakeIt Websites and Apps is looking at five sites with a
          wide array of recipes, teaching you to make everything from pad Thai
          to pizza. Whether you're looking for easy healthy recipes, soup
          recipes or anything else, one of these sites has you covered.
        </p>
      </Col>
      </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
