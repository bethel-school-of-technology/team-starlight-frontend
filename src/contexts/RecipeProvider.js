import axios from "axios";
import { useEffect, useState } from "react";
import RecipeContext from "./RecipeContext";

export const RecipeProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [recipes, setRecipes] = useState([]);
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
    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${protein},${carbohydrate},${vegetable}&number=6&limitLicense=true&ranking=1&ignorePantry=false&apiKey=${apiKey2}&include`;
    return axios.get(apiUrl).then((response) => setRecipes(response.data));
  }

  function getRecipeDetails(id) {
    //calls external API,  pass in "id" as parameter
    const apiUrl =  `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey2}&include`;
    console.log(apiUrl);
    return axios.get(apiUrl).then((response) => setRecipe(response.data));
  }

  

  //BACKEND DATABASE OPERATIONS

  function getRecipeDB() {
    let token = localStorage.getItem('myRecipeToken');
    let headers = {
      Authorization : 'Bearer ' + token
    } 

    return axios
      .get(baseUrl, {headers}, (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
      })
      .then((response) => setRecipesSaved(response.data));
  }

  function getOneRecipe(savedRecipeId) {
    let token = localStorage.getItem('myRecipeToken');
    let headers = {
      Authorization : 'Bearer ' + token
    } 
    return axios
      .get(`http://localhost:3000/api/recipe/${savedRecipeId}`,{headers})
      .then((response) => new Promise((resolve) => resolve(response.data)))
      .catch(
        (error) => new Promise((_, reject) => reject(error.response.statusText))
      );
      
  }
  function saveRecipeToDB(recipe) {
    let token = localStorage.getItem('myRecipeToken');
    let headers = {
      Authorization : 'Bearer ' + token
    } 

    return axios.post(baseUrl, recipe, {headers}).then((response) => {
      getRecipeDB();
      return new Promise((resolve) => resolve(response.data));
    });
  }


    function updateRecipeDB(recipe) {
      let token = localStorage.getItem('myRecipeToken');
      let headers = {
        Authorization : 'Bearer ' + token
      } 
      return axios
        .put(`http://localhost:3000/api/recipe/${recipe.savedRecipeId}`, recipe, {headers})
        .then((response) => {
          
          return new Promise((resolve) => resolve(response.data));
        });
    }
  

  function deleteRecipe(savedRecipeId) {
    console.log("this is connected to " + savedRecipeId);
    return axios.delete(baseUrl + savedRecipeId).then((response) => {
      getRecipeDB();
      return new Promise((resolve) => resolve(response.data));
    });
  }




  return (
    <RecipeContext.Provider
      value={{
        recipe,
        recipes,
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
