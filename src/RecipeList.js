import React, { useContext, useState } from "react";
import RecipeContext from "./contexts/RecipeContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const RecipeList = (props) => {
  //let { addMessages } = useContext(RecipeContext);

  let { recipe } = useContext(RecipeContext);
  let navigate = useNavigate();

  let [Protein, setNewProtein] = useState();

  let { getRecipeDetails } = useContext(RecipeContext);

  const handleSelect = (e) => {
    console.log(e);
    setNewProtein(e);
  };

  function handleLink(id) {
    console.log(id);
    getRecipeDetails(id);
    navigate("/recipes/" + id);
  }
  
  return (
    <div>
      <br></br>
      <br></br>

      <RecipeContext.Consumer>
        {({ recipe }) => {
          return (
            <div>
              <br></br>
              <h1>Recipe List</h1>
              <br></br>

              <div>
                <Stack direction="horizontal" gap={3} class="card deck">
                  <Row xs lg="3" className="mb-2">
                    {recipe.map((c) => {
                      return (
                        <div>
                          <Container>
                            <Card key={c.id} style={{ width: "18rem" }}>
                              <Card.Img variant="top" src={c.image} />
                              <Card.Body>
                                <Card.Title>{c.title}</Card.Title>
                                <Card.Text>
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </Card.Text>
                                <Button
                                  onClick={handleLink.bind(this, c.id)}
                                  key={c.id}
                                  className="btn btn-secondary mx-3"
                                >
                                  Details
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
