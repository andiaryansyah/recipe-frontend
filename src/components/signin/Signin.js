import React, { useState } from "react";
import bg from "../../assets/img/BGSignin.jpg";
import { Card, Form, Button } from "react-bootstrap";
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
      const response = await axios.post("https://secure-falls-46921.herokuapp.com/api/login", {
        email: email,
        password: password,
      });
      Cookies.set("accessToken", response.data.accessToken);
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <>
      
        <Card className="bg-dark text-dark ">
          <Card.Img src={bg} alt="Card image" height={560} />
          <Card.ImgOverlay>
            <Card.Title className=" mt-5 center">
              <h1>
                <b>SIGN IN TO YOUR ACCOUNT</b>
              </h1>
            </Card.Title>
            <div className="center">
            <Form onSubmit={Auth} className="mt-3" style={{ width: "450px" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label className="d-flex align-items-center justify-content-center">
                <h4>Email address</h4>
              </Form.Label> */}
                <div className="center">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    style={{
                      width: "500px",
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                {/* <Form.Label className="d-flex align-items-center justify-content-center">
                <h4>Password</h4>
              </Form.Label> */}
                <div className="center">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{ width: "500px" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </Form.Group>
              <h5 className="mb-2 center">
                {msg}
              </h5>
              <div  className="mb-2 center">
                <Button id="btnLogin" type="submit">
                  Login
                </Button>
              </div>
              <div className="center">
                <Card.Link className="cursorLink">
                  forgot your password ?
                </Card.Link>
                <Card.Link className="cursorLink" href="/signup">
                  do not have account ?
                </Card.Link>
              </div>
              </Form>
            </div>
          </Card.ImgOverlay>
        </Card>
      
    </>
  );
};

export default Signin;
