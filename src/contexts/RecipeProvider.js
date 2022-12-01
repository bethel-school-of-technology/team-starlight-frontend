import axios from "axios";
import { useEffect, useState } from "react";
import RecipeContext from "./RecipeContext";

export const RecipeProvider = (props) => {
  const [recipe, setRecipe] = useState([]);
  const [recipesSaved, setRecipesSaved] = useState([]);

  const baseUrl = "http://localhost:3000/api/recipe/";
  let apiKey1 = "d156b557823e42cb8c0ceaf8a4aecff8";
  let apiKey2 = "1f6236fcd8d24dccb1b8b477ae016d08"; 
  let apiKey3 = "8912113068c6417e90830c646da31879";

  useEffect(() => {
    async function fetchData() {
      await getAllRecipe();
    }
    fetchData();
  }, []);

  //EXTERNAL API OPERATIONS

  function getAllRecipe(protein,carbohydrate,vegetable) {
    //calls external API,  pass in protein from "Home.js" as parameter
    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${protein},${carbohydrate},${vegetable}&number=6&limitLicense=true&ranking=1&ignorePantry=false&apiKey=${apiKey1}&include`;
    return axios.get(apiUrl).then((response) => setRecipe(response.data));
  }

  function getRecipeDetails(id) {
    //calls external API,  pass in "id" as parameter
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey1}&include`;
    console.log(apiUrl);
    return axios.get(apiUrl).then((response) => setRecipe(response.data));
  }

  

  //BACKEND DATABASE OPERATIONS

  function getRecipeDB() {
    return axios
      .get(baseUrl, (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
      })
      .then((response) => setRecipesSaved(response.data));
  }

  function getOneRecipe(id) {
    return axios
      .get(`http://localhost:3000/api/recipe/${id}`)
      .then((response) => new Promise((resolve) => resolve(response.data)))
      .catch(
        (error) => new Promise((_, reject) => reject(error.response.statusText))
      );
      
  }
  function saveRecipeToDB(recipe) {
    return axios.post(baseUrl, recipe).then((response) => {
      getRecipeDB();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  // function updateRecipeDB(id) {
  //   return axios.put(`http://localhost:3000/api/recipe/${id}`)

    function updateRecipeDB(recipe) {
      return axios
        .put(`http://localhost:3000/api/recipe/${recipe.id}`, recipe)
        .then((response) => {
          
          return new Promise((resolve) => resolve(response.data));
        });
    }
  

  function deleteRecipe(id) {
    console.log("this is connected to " + id);
    return axios.delete(baseUrl + id).then((response) => {
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
        deleteRecipe,
        getOneRecipe,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
