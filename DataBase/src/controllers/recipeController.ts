import axios from "axios";
import { RequestHandler, response } from "express";
import test from "node:test";
import { recipeFactory, Recipes } from "../models/recipes";

export const defaultRecipes: RequestHandler = (req, res, next) => {
    res.redirect('/recipes');
}

export const allRecipes: RequestHandler = async (req, res, next) => {
    
    let recipeList: Recipes[] = await Recipes.findAll();
    
    res.render('all-recipes', { recipeList });
        // import node-fetch
        
}




  
 
    

   //const request = require('request');
     
    let _EXTERNAL_URL = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=fish&number=6&limitLicense=true&ranking=1&ignorePantry=false&apiKey=d156b557823e42cb8c0ceaf8a4aecff8&include';

export const receipeResults: RequestHandler = async (req, res, next)=> {
   
    const axios = require('axios');

    axios.get(_EXTERNAL_URL)
      .then((response: {  data: any;}) => {
        res.json(response.data)
        //let recipe = response.data;
        //console.log(recipe)
        //res.render('recipe-results', {recipe})
      })
      .catch((error: any) => {
        console.log(error);
      });
}


export const oneRecipe: RequestHandler = async (req, res, next) => {
    let itemId = req.params.recipeId;
    let recipeItem: Recipes | null = await Recipes.findByPk(itemId);

    if (recipeItem) {
        res.render('recipe-detail', { foundRecipe: recipeItem });
    }
    else {
        res.status(404).render('error', { message: 'friend not found' });
    }
}

export const addRecipePage: RequestHandler = (req, res, next) => {
    res.render('add-recipe');
}

export const addRecipe: RequestHandler = async (req, res, next) => {
    let newRecipe: Recipes = req.body;
    await Recipes.create(newRecipe);
    res.redirect('/recipes');
}

export const editRecipePage: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let recipeItem: Recipes | null = await Recipes.findOne({
        where: { id: itemId }
    });

    if (recipeItem) {
        res.render('edit-recipe', { foundRecipe: recipeItem });
    }
    else {
        res.status(404).render('error', { message: 'Friend not found' });
    }
}

export const editRecipe: RequestHandler = async (req, res, next) => {
    let itemId = req.params.recipeId;
    let updatedItem: Recipes = req.body;

    let [updated] = await Recipes.update(updatedItem, {
        where: { id: itemId }
    });

    if (updated === 1) {
        res.redirect('/recipes');
    }
    else {
        res.render('error', { message: 'Could not update friend' });
    }
}

export const deleteRecipe: RequestHandler = async (req, res, next) => {
    let itemId = req.params.recipeId;

    let deleted = await Recipes.destroy({
        where: { id: itemId }
    });

    if (deleted) {
        res.redirect('/recipes')
    }
    else {
        res.status(404).render('error', { message: 'Cannot find friend' });
    }
}