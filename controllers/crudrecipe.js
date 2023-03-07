const Recipe = require('../models/recipe');

exports.getAddRecipe = (req, res, next) => {
  res.render('add-recipe.pug', {
    path: 'add-recipe',
  });
};

exports.postAddRecipe = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  const recipe = new Recipe({
    title: title,
    description: description,
    imageUrl: imageUrl,
  });
  recipe
    .save()
    .then((result) => {
      console.log('recipe added');
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};

exports.getRecipe = (req, res, next) => {};
