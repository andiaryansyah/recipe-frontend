import React, { useState } from "react";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    if (password !== confPassword) {
      setMsg("Password and confirm password is do not match");
    } else {
      try {
        await axios.post("https://secure-falls-46921.herokuapp.com/api/users", {
          name: `${firstName} ${lastName}`,
          email,
          password,
          phone_number,
        });
        navigate("/signin");
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    }
  };

  return (
    <div className="signup-style">
      <Row>
        <Col>
          <div>
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/1lo-1651782941.jpg"
              alt="..."
              className="signup-img"
            />
          </div>
        </Col>
        <Col className="form-signup"  >
          <div className="center">
            <Form
              className="container mt-5 p-4"
              style={{ width: "450px" }}
              onSubmit={Register}
            >
              <div className="center">
                <h2>
                  <b>CREATE AN ACCOUNT</b>
                </h2>
              </div>
              <h5 className="center mb-2">{msg}</h5>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Control
                      placeholder="First name"
                      className="mt-4 form-input"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="Last name"
                      className="mt-4 form-input"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mt-3" controlId="formGridAddress1">
                <Form.Control
                className="form-input"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mt-3 form-input"
                controlId="formGridPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              >
                <Form.Control className="form-input" type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mt-3" controlId="formGridPassword">
                <Form.Control
                className="form-input"
                  type="password"
                  placeholder="Confirm Password"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-3" controlId="formGridPassword">
                <Form.Control
                className="form-input"
                  placeholder="Phone Number"
                  value={phone_number}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-4 center">
                <Button id="btnSignup" type="submit">
                  Create Account
                </Button>
              </Form.Group>
              <Card.Link className="mt-4 center cursorLink" href="/signin">
                Already have Account
              </Card.Link>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
