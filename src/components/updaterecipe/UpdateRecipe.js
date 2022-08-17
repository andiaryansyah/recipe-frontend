import React, { useState, useEffect } from "react";
import {
  Container,
  Accordion,
  Row,
  Col,
  Form,
  FloatingLabel,
  Figure,
  Button,
  useAccordionButton,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import cookies from "js-cookie";
import axios from "axios";
import jwtDecode from "jwt-decode";

const UpdateRecipe = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const { user_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRecipeById();
    //eslint-disable-next-line
  }, []);

  const decodeJWT = () => {
    const token = cookies.get("accessToken");
    const decoded = jwtDecode(token);
    return { decoded, token };
  };

  const loadImage = (e) => {
    const img = e.target.files[0];
    setImage(img);
    setPreview(URL.createObjectURL(img));
  };

  const getRecipeById = async () => {
    const response = await axios.get(
      `https://secure-falls-46921.herokuapp.com/api/users/${user_id}/recipes/${id}`,
      {
        headers: {
          authorization: `Bearer ${decodeJWT().token}`,
        },
      }
    );
    setTitle(response.data.title);
    setCategory(response.data.category);
    setInstructions(response.data.instructions);
    setIngredients(response.data.ingredients);
    setImage(response.data.image);
    setPreview(response.data.url);
  };

  const handleNewIngredient = () => {
    const newIng = ingredients.toString().split(",");
    setIngredients([...newIng, ""]);
  };

  const onDeleteIngredient = (ingredient) => {
    const items = ingredients.toString().split(",");
    if (items.length > 0) {
      const lastIndex = items.length - 1;
      setIngredients(items.filter((item, index) => index !== lastIndex));
    }
  };

  const handleChangeIng = (e) => {
    const index = Number(e.target.name.split("-")[1]);
    const getIngredients = ingredients.toString().split(",");
    setIngredients(() =>
      getIngredients.map((ing, i) => (i === index ? e.target.value : ing))
    );
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("instructions", instructions);
    formData.append("ingredients", ingredients);
    try {
      await axios.put(
        `https://secure-falls-46921.herokuapp.com/api/users/${user_id}/recipes/${id}`,
        formData,
        {
          headers: {
            authorization: `Bearer ${decodeJWT().token}`,
            "content-type": "multipart/form-data",
          },
        }
      );
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const getIng = ingredients.toString().split(",");
  const input = getIng?.map((ing, i) => (
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
      <Accordion defaultActiveKey="1">
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
                  <Form.Control
                    type="file"
                    style={{ width: "105px", overflow: "hidden" }}
                    onChange={loadImage}
                  />
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
                  <Button variant="dark" onClick={handleUpdate}>
                    Update
                  </Button>
                </div>
              </Form>
            </Col>
            <Col>
              <Accordion.Collapse eventKey="1">
                <div style={{ width: "330px",  overflowY: "scroll", height:"500px"}}>
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

export default UpdateRecipe;
