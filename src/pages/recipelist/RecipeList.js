import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "../../components/search/Search";
import { FilterRecipes, getRecipes } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import "./RecipeList.css";

const RecipeList = () => {
  const dispatch = useDispatch();
  const { filterRecipe } = useSelector((state) => state.recipe);
  const { recipe } = useSelector((state) => state.recipe);
  const [page, setPage] = useState(0);

  const recipePerPage = 6;

  const numberOfRecordsVistited = page * recipePerPage;

  const totalPages = Math.ceil(filterRecipe.length / recipePerPage);

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(FilterRecipes(recipe));
    // eslint-disable-next-line
  }, [recipe]);

  const displayRecipes = filterRecipe.slice(
    numberOfRecordsVistited,
    numberOfRecordsVistited + recipePerPage
  );

  return (
    <>
      <Container>
        <Search />
        <div className="sm:columns-1">
          {filterRecipe.length === 0 ? (
            <h1 className = "center">Not Found</h1>
          ) : (
            <div className="mb-5 recipelist-style">
              <Row xs={1} md={2} lg={3} xxl={3} className="g-4">
                {displayRecipes.map((recipe) => (
                  <Col key={recipe.id }>
                    <Card
                      className=" border border-0px border-dark recipelist-img"
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
                          Let’s make good, together. We’ve got the tips, tricks,
                          and tools to turn your tastes and tal ents into menu
                          must-haves.
                        </Card.Text>
                        <div className="mb-3">
                          <Link
                            to={`/users/${recipe.user_id}/recipe/${recipe.id}`}
                            className="details"
                          >
                            Recipe Details <span> {">"} </span>
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={totalPages}
                onPageChange={changePage}
                containerClassName={"navigationButtons"}
                previousLinkClassName={"previousButton"}
                nextLinkClassName={"nextButton"}
                disabledClassName={"navigationDisabled"}
                activeClassName={"navigationActive"}
              />
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default RecipeList;
