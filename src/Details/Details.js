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
  let { recipe, saveRecipeToDB } = useContext(RecipeContext);
  let navigate = useNavigate();

  let [Protein, setNewProtein] = useState();

  let { getRecipeDetails } = useContext(RecipeContext);

 function saveRecipe(){
    saveRecipeToDB(recipe);
    navigate("/recipes/saved");
 }

  let { id, title, image, servings, readyInMinutes, instructions, analyzedInstructions } = recipe;
  
  console.log(analyzedInstructions);
  
  return (<div>


  

     <p>DETAILS PAGE</p>
          <p>{id}</p>
          <p>{title}</p>
          <img src={image} />
          <p>servings: {servings}</p>
          <p>Ready in {readyInMinutes} minutes</p>
          
          {analyzedInstructions.map((instructionItem) => {

return (<>
{instructionItem.steps.map((stepItem) => {


          return (<p>{stepItem.number}. {stepItem.step}</p>)
})}

</>)

})}

          
          
          
          <Button onClick={saveRecipe}>Save to My Recipes</Button>
  </div>
    

  )
    
};

export default Details;
