import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import "./Dashboard.css";

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [id, setId] = useState("");
  const token = cookies.get("accessToken");

  useEffect(() => {
    getAllRecipeById();
    //eslint-disable-next-line
  }, []);

  const getAllRecipeById = async () => {
    const decoded = jwt_decode(token);
    let user_id;
    user_id = decoded.userId;
    setId(user_id);
    const response = await axios.get(
      `http://localhost:3000/api/users/${user_id}/recipes`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setRecipes(response.data);
  };

  const deleteRecipe = async (recipeId) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/users/${id}/recipes/${recipeId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getAllRecipeById();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-fluid">
      <div className="mb-4 mt-3">
        <Button
          href="/addrecipe"
          variant="success"
          style={{ width: "8 rem", marginRight: "0.5rem" }}
        >
          New Recipe +
        </Button>
      </div>

      <Row xs={1} md={5} className="g-3">
        {recipes.map((recipe) => (
          <Col key={recipe.id}>
            <Card
              style={{ width: "15rem", height: "20rem" }}
              className=" border border-0 border-dark"
            >
              <Card.Img
                variant="top"
                src={recipe.url}
                width={286}
                height={160}
              />
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <div className="mb-3">
                  <Link
                    to={`/users/${id}/recipe/${recipe.id}`}
                    className="details"
                  >
                    Recipe Details <span> {'>'} </span>
                  </Link>
                </div>
                <Button
                  href={`/updaterecipe/users/${id}/recipe/${recipe.id}`}
                  variant="primary"
                  id="btnEdit"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  id="btnDelete"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete this account?"
                      )
                    )
                      deleteRecipe(recipe.id);
                  }}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
