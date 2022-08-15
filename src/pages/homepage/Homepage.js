import React from "react";
import { Carousel, Form, Button, Row, Col, Card } from "react-bootstrap";
import Silde1 from "../../assets/img/slide1.jpg";
import Silde2 from "../../assets/img/slide2.jpg";
import Silde3 from "../../assets/img/slide3.jpg";
import Recipe from "../../components/recipe/Recipe";
import Footer from "../../components/footer/Footer";
import "./Homepage.css";
const Homepage = () => {
  return (
    <>
      <div style={{ fontFamily: "belleza" }}>
        <Carousel>
          <Carousel.Item interval={2000}>
            <Row>
              <Col className="p-0">
                <img
                  className="d-block w-100"
                  src={Silde2}
                  alt="First slide"
                  height={500}
                />
              </Col>
              <Col
                className="p-0"
                style={{
                  backgroundColor: "#36654f",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
                  <h1>Creating your cookbook is so simple.</h1>
                </div>
                <div className="p-5">
                  <p>
                    So many handwritten recipes. So little time to type them up.
                    All you have to do is upload the images and our secret sauce
                    technology does the rest. Fast and easy.
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <Button id="btnSlide1" href="/signup">
                    SIGN UP
                  </Button>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Row>
              <Col className="p-0">
                <img
                  className="d-block w-100"
                  src={Silde3}
                  alt="First slide"
                  height={500}
                />
              </Col>
              <Col
                className="p-0"
                style={{
                  backgroundColor: "#B37C57",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
                  <h1>Cooking With Fire</h1>
                </div>
                <div className="p-5">
                  <p>
                    We'll be updating this hub for all things grilling with new
                    fire-kissed recipes, grilling tips and tricks, and great
                    reviews all summer long.
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <Button id="btnSlide2" href="/recipelist">
                    VIEW RECIPES
                  </Button>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>

        <Form.Text
          className="d-flex align-items-center justify-content-center m-5"
          muted
          style={{ textAlign: "center" }}
        >
          <h2>
            YouCanMakeIt is a recipe platform dedicated to discovering what the
            delicious (and sometimes terrible) food of fiction actually tastes
            like.
          </h2>
        </Form.Text>
        <div className="d-flex align-items-center justify-content-center">
          <Recipe />
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
          <Button id="btnRecipes" href="/recipelist">VIEW ALL RECIPES</Button>
        </div>
        <div
          style={{ width: "79rem", textAlign: "center" }}
          className="mt-3 mb-5"
        >
          <Card>
            <Card.Img variant="top" height={460} src={Silde1} />
            <Card.ImgOverlay className="mt-5 text-light pt-5">
              <Card.Title className="mt-3">
                <h1>
                  <b>SUPPORT US</b>
                </h1>
              </Card.Title>
              <Card.Text className="mt-5 cardText">
                Get insider access to news around the innovations, culinary
                concepts, insights, and more.. Have a great idea? Connect with
                us. Together, we can whip up something wonderful.
              </Card.Text>
              <Button href="/about" id="btnAbout" className="mt-2">
                ABOUT
              </Button>
            </Card.ImgOverlay>
          </Card>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
