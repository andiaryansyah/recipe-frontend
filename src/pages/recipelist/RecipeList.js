import React, {useEffect} from "react";
import { Container } from "react-bootstrap";
import Search from "../../components/search/Search";
import Recipe from "../../components/recipe/Recipe";
import { FilterRecipes, getRecipes } from "../../store/action";
import {useDispatch, useSelector} from 'react-redux';

const RecipeList = () => {
  const dispatch = useDispatch();
  const {filterRecipe} = useSelector(state => state.recipe);
  const {recipe} = useSelector(state => state.recipe);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

useEffect(() => {
  dispatch(FilterRecipes(recipe));
   // eslint-disable-next-line
}, [recipe]);

  return (
    <>
      <Container>
        <Search />
          <div className="d-flex align-items-center justify-content-center">
          {filterRecipe.length === 0 ? 
      <h1>Not Found</h1> :
            <Recipe />
          }
          </div>
      </Container>
    </>
  );
};

export default RecipeList;
