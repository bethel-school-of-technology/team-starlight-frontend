"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecipe = exports.editRecipe = exports.editRecipePage = exports.addRecipe = exports.addRecipePage = exports.oneRecipe = exports.receipeResults = exports.allRecipes = exports.defaultRecipes = void 0;
const recipes_1 = require("../models/recipes");
const defaultRecipes = (req, res, next) => {
    res.redirect('/recipes');
};
exports.defaultRecipes = defaultRecipes;
const allRecipes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let recipeList = yield recipes_1.Recipes.findAll();
    res.render('all-recipes', { recipeList });
    // import node-fetch
});
exports.allRecipes = allRecipes;
//const request = require('request');
let _EXTERNAL_URL = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=fish&number=6&limitLicense=true&ranking=1&ignorePantry=false&apiKey=d156b557823e42cb8c0ceaf8a4aecff8&include';
const receipeResults = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const axios = require('axios');
    axios.get(_EXTERNAL_URL)
        .then((response) => {
        res.json(response.data);
        //let recipe = response.data;
        //console.log(recipe)
        //res.render('recipe-results', {recipe})
    })
        .catch((error) => {
        console.log(error);
    });
});
exports.receipeResults = receipeResults;
const oneRecipe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.recipeId;
    let recipeItem = yield recipes_1.Recipes.findByPk(itemId);
    if (recipeItem) {
        res.render('recipe-detail', { foundRecipe: recipeItem });
    }
    else {
        res.status(404).render('error', { message: 'friend not found' });
    }
});
exports.oneRecipe = oneRecipe;
const addRecipePage = (req, res, next) => {
    res.render('add-recipe');
};
exports.addRecipePage = addRecipePage;
const addRecipe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let newRecipe = req.body;
    yield recipes_1.Recipes.create(newRecipe);
    res.redirect('/recipes');
});
exports.addRecipe = addRecipe;
const editRecipePage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.id;
    let recipeItem = yield recipes_1.Recipes.findOne({
        where: { id: itemId }
    });
    if (recipeItem) {
        res.render('edit-recipe', { foundRecipe: recipeItem });
    }
    else {
        res.status(404).render('error', { message: 'Friend not found' });
    }
});
exports.editRecipePage = editRecipePage;
const editRecipe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.recipeId;
    let updatedItem = req.body;
    let [updated] = yield recipes_1.Recipes.update(updatedItem, {
        where: { id: itemId }
    });
    if (updated === 1) {
        res.redirect('/recipes');
    }
    else {
        res.render('error', { message: 'Could not update friend' });
    }
});
exports.editRecipe = editRecipe;
const deleteRecipe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.recipeId;
    let deleted = yield recipes_1.Recipes.destroy({
        where: { id: itemId }
    });
    if (deleted) {
        res.redirect('/recipes');
    }
    else {
        res.status(404).render('error', { message: 'Cannot find friend' });
    }
});
exports.deleteRecipe = deleteRecipe;
