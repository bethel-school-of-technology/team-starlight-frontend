import React, { useContext, useEffect, useState } from "react";
import RecipeContext from "../contexts/RecipeContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const RecipeList = () => {
  let { recipesSaved } = useContext(RecipeContext);
  let navigate = useNavigate();

  let { getRecipeDetails, getRecipeDB, updateRecipeDB, deleteRecipe } = useContext(RecipeContext);

  function handleLink(id) {
    console.log(id);
    getRecipeDetails(id);
    navigate("/recipes/" + id);
  }

  function handleEditRecipe(id) {
    console.log(id);
    navigate("/recipes/edit/" + id);
  }
  // useEffect((getRecipeDB()))

  // useEffect(getRecipeDB()) 

  useEffect(() => {
    
    getRecipeDB();
  }, []);

  function updateSavedRecipes(id){
    updateRecipeDB(id);
    navigate("/recipes/")
  }

  function handleDelete(id) {
    deleteRecipe(id);
    getRecipeDB();
        navigate("/recipes/saved");
     }

  return (
    <div>
      <br></br>
      <br></br>

      <RecipeContext.Consumer>
        {() => {
          return (
            <div>
              <br></br>
              <h1>My Recipes</h1>
              <br></br>

              <div>
                <Stack direction="horizontal" gap={3} class="card deck">
                  <Row xs lg="3" className="mb-2">
                    {recipesSaved.map((c) => {
                      return (
                        <div>
                          <Container>
                            <Card key={c.id} style={{ width: "18rem" }}>
                              <Card.Img variant="top" src={c.image} />
                              <Card.Body>
                                <Card.Title>{c.title}</Card.Title>
                                <Card.Text>
                                  Servings {c.servings} <br></br>
                                  Ready in {c.readyInMinutes} minutes
                                </Card.Text>
                                
                                <Button
                                  onClick={handleLink.bind(this, c.id)}
                                  key={c.id}
                                  className="btn btn-info mx-3"
                                >
                                  Details
                                </Button>

                                <Button
                                className="btn btn-danger mx-3"
                            class="btn  btn-sm"
                            onClick={() => handleDelete(c.id)}
                          >
                            Delete
                          </Button>

                          <Button
                                  onClick={handleEditRecipe.bind(this, c.id)}
                                  key={c.id}
                                  className="btn btn-warning mx-3"
                                >
                                  Edit
                                </Button>

                              </Card.Body>
                            </Card>
                          </Container>
                        </div>
                      );
                    })}
                  </Row>
                </Stack>
              </div>
            </div>
          );
        }}
      </RecipeContext.Consumer>
    </div>
  );
};

export default RecipeList;