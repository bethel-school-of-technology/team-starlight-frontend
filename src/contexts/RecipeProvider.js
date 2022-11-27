import axios from "axios";
import { useEffect, useState } from "react";
import RecipeContext from "./RecipeContext";
import Home from "../Home/Home";

export const RecipeProvider = (props) => {
  const [recipe, setRecipe] = useState([]);
  const baseUrl = "http://localhost:3000";
  let apiKey1 = "d156b557823e42cb8c0ceaf8a4aecff8";
  let apiKey2 = "1f6236fcd8d24dccb1b8b477ae016d08";

  useEffect(() => {
    async function fetchData() {
      await getAllRecipe();
    }
    fetchData();
  }, []);

  function getAllRecipe(protein) {
    //calls external API, Trynig to pass in protein from "Home.js" as parameter
    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${protein}&number=6&limitLicense=true&ranking=1&ignorePantry=false&apiKey=${apiKey1}&include`;
    return axios.get(apiUrl).then((response) => setRecipe(response.data));
  }

  function getRecipeDetails(id) {
    //calls external API, Trynig to pass is "id" as parameter
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=1f6236fcd8d24dccb1b8b477ae016d08&include`;
    console.log(apiUrl);
    return axios.get(apiUrl).then((response) => setRecipe(response.data));
  }

  function getRecipeDB() {
    return axios.get(baseUrl).then((response) => setRecipe(response.data));
  }

  function saveRecipeToDB(recipe) {
    return axios.post(baseUrl, recipe).then((response) => {
      getRecipeDB();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  return (
    <RecipeContext.Provider
      value={{
        recipe,
        getAllRecipe,
        getRecipeDetails,
        getRecipeDB,
        saveRecipeToDB,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
