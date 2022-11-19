import axios from "axios";
import { useEffect, useState } from "react";
import RecipeContext from "./RecipeContext";

export const RecipeProvider = (props) => {
  const [recipe, setRecipe] = useState([]);
  const [recipesSaved, setRecipesSaved] = useState([]);
  const baseUrl = "http://localhost:3000/api/recipe/";

  //the daily api calls might get maxed, switch between key if getting 402 error
 const apiKey1 = "1f6236fcd8d24dccb1b8b477ae016d08"
 const apiKey2 = 

  useEffect(() => {
    async function fetchData() {
      await getAllRecipe();
    }
    fetchData();
  }, []);

  function getAllRecipe(Protein) {
    //calls external API, Trynig to pass is protein from "RecipeList.js" as parameter 
    const apiUrl =
      "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
      "chicken" +
      "&number=6&limitLicense=true&ranking=1&ignorePantry=false&apiKey=1f6236fcd8d24dccb1b8b477ae016d08&include";
      
    return axios.get(apiUrl).then((response) => setRecipe(response.data));
  }

  function getRecipeDetails(id) {
    //calls external API, Trynig to pass is "id" as parameter
    const apiUrl =
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=1f6236fcd8d24dccb1b8b477ae016d08&include`;
    console.log(apiUrl);
    return axios.get(apiUrl).then((response) => setRecipe(response.data));
  }

  function getRecipeDB() {
    return axios.get(baseUrl).then(response => setRecipesSaved(response.data));
}

  function saveRecipeToDB(recipe){
    return axios.post(baseUrl, recipe)
  }

  function updateRecipeDB(id) {
    return axios.put(baseUrl, id);
}  

function deleteRecipe(id) {
  console.log("this is connected to " + id);
    return axios
      .delete(baseUrl + id, )
      .then((response) => {
        getRecipeDB();
        return new Promise((resolve) => resolve(response.data));
      });
}



  return (
    <RecipeContext.Provider
      value={{
        recipe,
        recipesSaved,
        getAllRecipe,
        getRecipeDetails,
        getRecipeDB,
        saveRecipeToDB,
        updateRecipeDB,
        deleteRecipe
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
