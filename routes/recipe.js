const path = require('path');
const express = require('express');

const recipeController = require('../controllers/recipe');
const crudRecipe = require('../controllers/crudrecipe');

const router = express.Router();

router.get('/', recipeController.getIndex);

//needs controller to add recipe
router.get('/add-recipe', crudRecipe.getAddRecipe);

router.post('/add-recipe', crudRecipe.postAddRecipe);

module.exports = router;
