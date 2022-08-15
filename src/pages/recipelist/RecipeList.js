import React from "react";
import { Container } from "react-bootstrap";
import Search from "../../components/search/Search";
import Recipe from "../../components/recipe/Recipe";

const RecipeList = () => {

  return (
    <>
      <Container>
        <Search />
          <div>
            <Recipe />
          </div>
      </Container>
    </>
  );
};

export default RecipeList;
