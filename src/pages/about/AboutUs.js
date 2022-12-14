import React from "react";
import { Row, Col } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Silde1 from "../../assets/img/BGSignin.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
    <div className="about-row">
      <Row xs={1} sm={1} md={1} lg={2} >
        <Col className="about-hero mt-4">
        <img src={Silde1} alt="breakfast" className="about-img"/>
      </Col>
      <Col className="about-title mb-2">
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
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
