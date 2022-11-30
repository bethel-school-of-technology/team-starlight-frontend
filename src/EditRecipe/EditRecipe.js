import { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import RecipeContext from "../contexts/RecipeContext";

function RecipeForm() {
  let params = useParams();
  let [recipe, setRecipe] = useState({
    id: params.id,
    title: params.title,
    image: "",
    servings: "",
    readyInMinutes: "",
  });

  let { getOneRecipe, addRecipe, updateRecipeDB } = useContext(RecipeContext);
  let navigate = useNavigate();

  let { id, title, image, servings, readyInMinutes } = recipe;

  useEffect(
    () => {
      if (id === undefined) return;
      async function fetch() {
        await getOneRecipe(id).then((recipe) => setRecipe(recipe));
      }

      fetch();
    },
    [id],
    console.log(recipe)
  );

  function handleChange(event) {
    setRecipe((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value };
    });
  }

  function addOrUpdate() {
    if (id === undefined) {
      return addRecipe(recipe);
    } else {
      return updateRecipeDB(recipe);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    addOrUpdate().then((recipe) => navigate(`/recipes/saved`));
  }

  function getPicture() {
    if (image !== undefined) {
      return image;
    } else {
      return "https://via.placeholder.com/256";
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Image
        src={getPicture()}
        className="img-thumbnail"
        alt="..."
        style={{ maxWidth: "24rem" }}
      />
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Servings</Form.Label>
        <Form.Control
          type="integer"
          name="servings"
          value={servings}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Ready In Minutes</Form.Label>
        <Form.Control
          type="number"
          name="readyInMinutes"
          value={readyInMinutes}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={image}
          onChange={handleChange}
        />
      </Form.Group>

      <Button type="submit">Save</Button>
    </Form>
  );
}

export default RecipeForm;
