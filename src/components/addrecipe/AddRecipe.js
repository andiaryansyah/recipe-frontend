import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  FloatingLabel,
  Accordion,
  useAccordionButton,
  Row,
  Col,
  Figure,
} from "react-bootstrap";
import cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import axios from "axios";
import "./AddRecipe.css";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const decodeJWT = () => {
    const token = cookies.get("accessToken");
    const decoded = jwtDecode(token);
    return { decoded, token };
  };

  const handleNewIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const onDeleteIngredient = () => {
    const items = ingredients;
    if (items.length > 0) {
      const lastIndex = items.length - 1;
      setIngredients(items.filter((item, index) => index !== lastIndex));
    }
  };

  const handleChangeIng = (e) => {
    const index = Number(e.target.name.split("-")[1]);
    setIngredients((ingredients) =>
      ingredients.map((ing, i) => (i === index ? e.target.value : ing))
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    decodeJWT();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("instructions", instructions);
    formData.append("ingredients", ingredients);
    try {
      await axios.post(
        `http://localhost:3000/api/users/${decodeJWT().decoded.userId}/recipes`,
        formData,
        {
          headers: {
            authorization: `Bearer ${decodeJWT().token}`,
            "content-type": "multipart/form-data",
          },
        }
      );
    window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const input = ingredients.map((ing, i) => (
    <div
      className="d-flex align-items-center justify-content-between mb-2"
      key={`ingredient-${i}`}
      style={{ width: "350px" }}
    >
      <Row>
        <Col>
          <Form.Label>{i + 1}.</Form.Label>
        </Col>
        <Col>
          <Form.Control
            style={{ width: "250px" }}
            type="text"
            name={`ingredient-${i}`}
            value={ing}
            size={45}
            autoComplete="off"
            placeholder=" Ingredient"
            onChange={handleChangeIng}
          />
        </Col>
      </Row>
    </div>
  ));

  return (
    <Container>
      <Accordion defaultActiveKey="0">
        <div className="d-flex align-items-center justify-content-center mt-5 mb-3">
          <Row>
            <Col>
              <Form style={{ width: "450px" }}>
                <FloatingLabel controlId="floatingInput" label="Title">
                  <Form.Control
                    className="mb-3"
                    type="text"
                    value={title}
                    placeholder="Title"
                    autoComplete="off"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Category">
                  <Form.Control
                    className="mb-3"
                    type="text"
                    value={category}
                    placeholder="Category"
                    autoComplete="off"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Instructions"
                >
                  <Form.Control
                    className="mb-3"
                    as="textarea"
                    style={{ height: "150px" }}
                    value={instructions}
                    placeholder="Instructions"
                    autoComplete="off"
                    onChange={(e) => setInstructions(e.target.value)}
                  />
                </FloatingLabel>
                <div className="d-flex align-items-center justify-content-end mb-3">
                  <CustomToggle eventKey="1">Ingredient List</CustomToggle>
                </div>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control type="file" onChange={loadImage} />
                </Form.Group>
                <Form.Group>
                  {preview ? (
                    <Figure>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={preview}
                      />
                    </Figure>
                  ) : (
                    ""
                  )}
                </Form.Group>
                <div className="d-flex align-items-center justify-content-end">
                  <Button variant="dark" onClick={handleSubmit}>
                    Save
                  </Button>
                </div>
              </Form>
            </Col>
            <Col>
              <Accordion.Collapse eventKey="1">
                <div style={{ width: "320px",  overflowY: "scroll", height:"500px" }}>
                  <Form.Label> Ingredients :</Form.Label>
                  {input}
                  <div className="d-flex align-items-center justify-content-end">
                    <Button
                      variant="dark"
                      className="d-flex align-items-center justify-content-center "
                      style={{ height: "25px" }}
                      onClick={handleNewIngredient}
                    >
                      +
                    </Button>
                    <Button
                      variant="dark"
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "25px", marginLeft: "3px", marginRight:"20px" }}
                      onClick={onDeleteIngredient}
                    >
                      -
                    </Button>
                  </div>
                </div>
              </Accordion.Collapse>
            </Col>
          </Row>
        </div>
      </Accordion>
    </Container>
  );
};

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("success")
  );

  return (
    <Button variant="dark" onClick={decoratedOnClick}>
      {children}
    </Button>
  );
}

export default AddRecipe;
