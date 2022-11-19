import { RequestHandler } from "express";
import { Recipe } from "../models/recipe";

export const getAllRecipes: RequestHandler = async (req, res, next) => {
    let recipes = await Recipe.findAll();
    res.status(200).json(recipes);
}

export const createRecipe: RequestHandler = async (req, res, next) => {
    let newRecipe: Recipe = req.body;
    if (newRecipe.title) {
        let created = await Recipe.create(newRecipe);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
}

export const getRecipe: RequestHandler = async (req, res, next) => {
    let recipeId = req.params.id;
    let recipeFound = await Recipe.findByPk(recipeId);
    if (recipeFound) {
        res.status(200).json(recipeFound);
    }
    else {
        res.status(404).json();
    }
}

export const updateRecipe: RequestHandler = async (req, res, next) => {
    let recipeId = req.params.id;
    let newRecipe: Recipe = req.body;
    
    let recipeFound = await Recipe.findByPk(recipeId);
    
    if (recipeFound && recipeFound.recipeId == newRecipe.recipeId
        && newRecipe.title && newRecipe) {
            await Recipe.update(newRecipe, {
                where: { id: recipeId }
            });
            res.status(200).json();
    }
    else {
        res.status(400).json();
    }
}

export const deleteRecipe: RequestHandler = async (req, res, next) => {
    let recipeId = req.params.id;
    let recipeFound = await Recipe.findByPk(recipeId);
    
    if (recipeFound) {
        await Recipe.destroy({
                where: { id: recipeId }
        });
        res.status(200).json();
    }
    else {
        res.status(404).json();
    }
}