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
exports.deletePet = exports.editPet = exports.editPetPage = exports.addPet = exports.addPetPage = exports.oneRecipe = exports.allPets = exports.defaultPets = void 0;
const recipes_1 = require("../models/recipes");
const defaultPets = (req, res, next) => {
    res.redirect('/recipes');
};
exports.defaultPets = defaultPets;
const allPets = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let recipeList = yield recipes_1.Pets.findAll();
    res.render('all-recipes', { recipeList });
});
exports.allPets = allPets;
const oneRecipe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.recipeId;
    let recipeItem = yield recipes_1.Pets.findByPk(itemId);
    if (recipeItem) {
        res.render('recipe-detail', { foundPet: recipeItem });
    }
    else {
        res.status(404).render('error', { message: 'friend not found' });
    }
});
exports.oneRecipe = oneRecipe;
const addPetPage = (req, res, next) => {
    res.render('add-recipe');
};
exports.addPetPage = addPetPage;
const addPet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let newPet = req.body;
    yield recipes_1.Pets.create(newPet);
    res.redirect('/recipes');
});
exports.addPet = addPet;
const editPetPage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.recipeId;
    let recipeItem = yield recipes_1.Pets.findOne({
        where: { recipeId: itemId }
    });
    if (recipeItem) {
        res.render('edit-recipe', { foundPet: recipeItem });
    }
    else {
        res.status(404).render('error', { message: 'Friend not found' });
    }
});
exports.editPetPage = editPetPage;
const editPet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.recipeId;
    let updatedItem = req.body;
    let [updated] = yield recipes_1.Pets.update(updatedItem, {
        where: { recipeId: itemId }
    });
    if (updated === 1) {
        res.redirect('/recipes');
    }
    else {
        res.render('error', { message: 'Could not update friend' });
    }
});
exports.editPet = editPet;
const deletePet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.recipeId;
    let deleted = yield recipes_1.Pets.destroy({
        where: { recipeId: itemId }
    });
    if (deleted) {
        res.redirect('/recipes');
    }
    else {
        res.status(404).render('error', { message: 'Cannot find friend' });
    }
});
exports.deletePet = deletePet;
