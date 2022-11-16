import { Router } from 'express';
import { allRecipes,receipeResults, editRecipe, oneRecipe, addRecipePage, addRecipe, editRecipePage, deleteRecipe  } from '../controllers/recipeController';

const router = Router();


router.get('/', allRecipes);

router.get('/add', addRecipePage);

router.post('/add', addRecipe);

router.get('/edit/:recipeId', editRecipePage);

router.get('/results', receipeResults);

router.post('/delete/:recipeId', deleteRecipe);

router.get('/:recipeId', oneRecipe);

router.post('/edit/:recipeId', editRecipe);

export default router;