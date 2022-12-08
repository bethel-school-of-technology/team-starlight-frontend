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
  useSearchParams,
  useParams,
} from "react-router-dom";
import { Button } from "react-bootstrap";

const Details = () => {
  let { id } = useParams();

  console.log(id);
  let {saveRecipeToDB, recipe } = useContext(RecipeContext);
  let navigate = useNavigate();

  let [Protein, setNewProtein] = useState();

  let { getRecipeDetails } = useContext(RecipeContext);

 function saveRecipe(){
    saveRecipeToDB(recipe);
    navigate("/recipes/saved");
 }

 useEffect(() => {
  async function fetchData() {
    await getRecipeDetails(id);
  }
  fetchData();
}, [id]);



  //let { title, image, servings, readyInMinutes, instructions, analyzedInstructions } = recipe;
  
  // console.log(recipe[0]);
  // console.log(analyzedInstructions);
  
  return (<div>


  

     <p>DETAILS PAGE</p>
          <p>{recipe.id}</p>
          <p>{recipe.title}</p>
          <img src={recipe.image} />
          <p>servings: {recipe.servings}</p>
          <p>Ready in {recipe.readyInMinutes} minutes</p>
          
          {recipe.analyzedInstructions?.map((instructionItem) => {

return (<>
{instructionItem?.steps?.map((stepItem) => {


          return (<p>{stepItem.number}. {stepItem.step}</p>)
})}

</>)

})}

          
          
          
          <Button onClick={saveRecipe}>Save to My Recipes</Button>
  </div>
    

  )
    
};

export default Details;

//Test
