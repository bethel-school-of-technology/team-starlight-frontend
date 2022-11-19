import React, { useContext, useState } from "react";
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
  useSearchParams,
} from "react-router-dom";
import { Button } from "react-bootstrap";

const Details = () => {
  let { recipe } = useContext(RecipeContext);
  let navigate = useNavigate();

  let [Protein, setNewProtein] = useState();

  let { getRecipeDetails, saveRecipeToDB } = useContext(RecipeContext);

 function saveRecipe(id){
    saveRecipeToDB(id);
    navigate("/recipes/saved");
 }

  function edit(){
    navigate("/recipes/"+id+"/edit")
  }


  let { id, title, image, servings, readyInMinutes  } = recipe;
  return (<div>

     <p>DETAILS PAGE</p>
          <p>{id}</p>
          <p>{title}</p>
          <img src={image} />
          <p>servings: {servings}</p>
          <p>REady in {readyInMinutes} minutes</p>
          <button onClick={saveRecipe}>Save Recipe</button>
          <button onClick={edit}>Edit Recipe</button>
  </div>
    

  )
    
};

export default Details;
