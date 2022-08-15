import React from "react";
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Offcanvas,
  Button,
} from "react-bootstrap";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
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
          key={expand}
          bg="dark"
          variant="dark"
          expand={expand}
        >
          <Container>
            <Navbar.Brand href="#">YouCanMakeIt</Navbar.Brand>
            {isLogin ? (
              <>
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
                    <Nav className="align-items-center justify-content-end flex-grow-1 pe-3" style={{marginLeft:"110px"}}>
                      <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                      <Nav.Link href="/dashboard" className="nav-link">Dashboard</Nav.Link>
                      <Nav.Link href="/recipelist" className="nav-link">Recipes</Nav.Link>
                    </Nav>
                    <Nav className="align-items-center justify-content-end flex-grow-1 pe-3">
                      <Navbar.Text>Sign in as :</Navbar.Text>
                      <NavDropdown
                        variant="dark"
                        title={ <span className="text-light ">{name}</span>}
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
              <Nav className=" nav-links">
                      <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                      <Nav.Link href="/recipelist" className="nav-link">Recipes</Nav.Link>
                      <Nav.Link href="#action3" className="nav-link">About</Nav.Link>
                    </Nav>
                <Button href="/signin" id="btnLognav">Sign In</Button>
              </>
            )}
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navbarr;
