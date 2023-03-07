const Recipe = require('../models/recipe');

exports.getIndex = (req, res, next) => {
  Recipe.find()
    .then((recipies) => {
      res.render('main');
    })
    .catch((err) => console.log(err));
};
