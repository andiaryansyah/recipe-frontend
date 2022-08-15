import React, {  useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Recipe.css";
import { FilterRecipes, getRecipes } from "../../store/action";
import {useDispatch, useSelector} from 'react-redux';


const Recipe = () => {
  const dispatch = useDispatch();
  const {filterRecipe} = useSelector(state => state.recipe);
  const {recipe} = useSelector(state => state.recipe);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

useEffect(() => {
  dispatch(FilterRecipes(recipe));
}, [recipe]);

  return (
    <div className="container">
      {filterRecipe.length === 0 ? 
      <h1>Not Found</h1> :
        <Row xs={1} md={3} className="g-4 center">
          {filterRecipe && filterRecipe.map((recipe) => (
            <Col key={recipe.id}>
              <Card 
                style={{ width: "23rem" }}
                className=" border border-0 border-dark"
              >
                <Card.Img
                  variant="top"
                  src={recipe.url}
                  width={263}
                  height={263}
                />
                <Card.Body>
                  <Card.Title id="title">{recipe.title}</Card.Title>
                  <Card.Text>
                    Let’s make good, together. We’ve got the tips, tricks, and
                    tools to turn your tastes and tal ents into menu must-haves.
                  </Card.Text>
                  <div className="mb-3">
                    <Link
                      to={`/users/${recipe.user_id}/recipe/${recipe.id}`}
                      className="details"
                    >
                      Recipe Details <span> {'>'} </span>
                    </Link>
                    
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
}
    </div>
  );
};

export default Recipe;
