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

  let { getOneRecipe, getRecipeDB,  deleteRecipe } = useContext(RecipeContext);

  function handleDetails(savedRecipeId) {
    // getOneRecipe(savedRecipeId);
    navigate("/savedrecipes/" + savedRecipeId);
  }

  function handleEditRecipe(savedRecipeId) {
    console.log(savedRecipeId);
    navigate("/recipes/edit/" + savedRecipeId);
  }
 
  function loadPage() {
    
    getRecipeDB().catch(error => {
        console.log(error);
        navigate('/login');
        alert("You must login to view this page")
    });
}

  useEffect(() => {

    loadPage();
      }, []);

 

  function handleDelete(savedRecipeId) {
    deleteRecipe(savedRecipeId);
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
                            <Card key={c.savedRecipeId} style={{ width: "18rem" }}>
                              <Card.Img variant="top" src={c.image} />
                              <Card.Body>
                                <Card.Title>{c.title}</Card.Title>
                                <Card.Text>
                                  Servings {c.servings} <br></br>
                                  Ready in {c.readyInMinutes} minutes
                                </Card.Text>
                                
                                <Button
                                  onClick={handleDetails.bind(this, c.savedRecipeId)}
                                  key={c.id}
                                  className="btn btn-info mx-3"
                                >
                                  Details
                                </Button>

                                <Button
                                className="btn btn-danger mx-3"
                            class="btn  btn-sm"
                            onClick={() => handleDelete(c.savedRecipeId)}
                          >
                            Delete
                          </Button>

                          <Button
                                  onClick={handleEditRecipe.bind(this, c.savedRecipeId)}
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
