import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import "./signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://secure-falls-46921.herokuapp.com/api/login",
        {
          email: email,
          password: password,
        }
      );
      Cookies.set("accessToken", response.data.accessToken);
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div className="signin-style">
      <Row>
        <Col>
          <div>
            <img
              src="https://i.pinimg.com/originals/cb/1d/11/cb1d11993d6e924c9156f6068da667fb.jpg"
              alt="..."
              className="signin-img"
            />
          </div>
        </Col>
        <Col className="form-signin">
          <Card.Title className=" mt-5 text-center">
            <h1>
              <b>SIGN IN TO YOUR ACCOUNT</b>
            </h1>
          </Card.Title>
          <div className="center">
            <Form onSubmit={Auth} className="mt-3" style={{ width: "450px" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <div className="center">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <div className="center">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </Form.Group>
              <h5 className="mb-2 center">{msg}</h5>
              <div className="mb-4 center">
                <Button id="btnLogin" type="submit">
                  Login
                </Button>
              </div>
              <div className="links">
                <Card.Link
                  className="cursorLink"
                >
                  forgot your password ?
                </Card.Link>
                <Card.Link className="cursorLink" style={{marginRight:"0px"}} href="/signup">
                  do not have account ?
                </Card.Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Signin;
