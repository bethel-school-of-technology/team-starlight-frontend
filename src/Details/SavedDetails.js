import React, { useContext, useState, useEffect } from "react";
import RecipeContext from "../contexts/RecipeContext";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  Link,
  Navigate,
  NavLink,
  Outlet,
  useNavigate,
  useSearchParams,useParams
} from "react-router-dom";
import { Button } from "react-bootstrap";

const Details = () => {
  let params = useParams();
  let [recipe, setRecipe] = useState({
    savedRecipeId:params.savedRecipeId,
    id: params.id,
    title: params.title,
    image: "",
    servings: "",
    readyInMinutes: "",
  });
  
  let navigate = useNavigate();

  let [Protein, setNewProtein] = useState();

  let { getRecipeDetails, getOneRecipe } = useContext(RecipeContext);

 function myRecipes(){
    
    navigate("/recipes/saved");
 }

  let { id, title, image, servings, readyInMinutes, savedRecipeId  } = recipe;

  useEffect(
    () => {
      if (savedRecipeId === undefined) return;
      async function fetch() {
        await getOneRecipe(savedRecipeId).then((recipe) => setRecipe(recipe));
      }

      fetch();
    },
    [id],
    console.log(recipe)
  );
  return (<div>


  

     <p>DETAILS PAGE</p>
    
          
          <p>{title}</p>
          <img src={image} />
          <p>servings: {servings}</p>
          <p>REady in {readyInMinutes} minutes</p>
          <p>servings: {servings}</p>
          
          <Button onClick={myRecipes}>Back to My Recipes</Button>
  </div>
    

  )
    
};

export default Details;
