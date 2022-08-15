import React, { useState } from "react";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import bg from "../../assets/img/BGSignin.jpg";
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
        await axios.post("http://localhost:3000/api/users", {
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
    <>
      <Card className="bg-dark text-dark">
        <Card.Img src={bg} alt="Card image" height={560} />
        <Card.ImgOverlay>
          <div className="center">
            <Form
              className="container mt-5 p-4"
              style={{ width: "450px" }}
              onSubmit={Register}
            >
              <div className="center">
                <h2><b>CREATE AN ACCOUNT</b></h2>
              </div>
              <h5 className="center mb-2">
                {msg}
              </h5>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Control
                      placeholder="First name"
                      className="mt-4"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="Last name"
                      className="mt-4"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mt-3" controlId="formGridAddress1">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mt-3"
                controlId="formGridPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              >
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mt-3" controlId="formGridPassword">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-3" controlId="formGridPassword">
                <Form.Control
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
              <Card.Link
                className="mt-4 center cursorLink"
                href="/signin"
              >
                Already have Account
              </Card.Link>
            </Form>
          </div>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Signup;
