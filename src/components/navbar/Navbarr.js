import React from "react";
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Offcanvas,
  Button,
  Form,
} from "react-bootstrap";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import "./Navbarr.css";

const Navbarr = () => {
  const navigate = useNavigate();

  const Logout = () => {
    try {
      Cookies.remove("accessToken");
      navigate("/");
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const isLogin = Cookies.get("accessToken");
  let name;
  if (isLogin) {
    const decoded = jwt_decode(isLogin);
    name = decoded.userName;
  }
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          className="nav-style"
          key={expand}
          bg="dark"
          variant="dark"
          expand={expand}
        >
          <Container>
            {isLogin ? (
              <>
                <div fixed="top">
                </div>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="md:align-items-center justify-content-end flex-grow-1 pe-3">
                      <Navbar.Text>Sign in as :</Navbar.Text>
                      <NavDropdown
                        variant="dark"
                        title={<span className="text-gray-500 ">{name}</span>}
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="#action3">
                          Profile
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="" onClick={Logout}>
                          Log Out
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </>
            ) : (
              <>
                <Navbar.Brand href="#">YouCanMakeIt</Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="m-auto nav-links">
                      <Nav.Link className="nav-linked" as={Link} to="/">
                        Home
                      </Nav.Link>
                      <Nav.Link className="nav-linked" as={Link} to="/recipelist">
                        Recipes
                      </Nav.Link>
                      <Nav.Link className="nav-linked" as={Link} to="/about">
                        About
                      </Nav.Link>
                    </Nav>
                    <Form className="d-flex form-button">
                      <Button href="/signin" className="btnLognav">
                        Sign In
                      </Button>
                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </>
            )}
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navbarr;
