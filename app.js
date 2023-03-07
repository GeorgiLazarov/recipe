const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

//file with connection string so we will not expose it in github
const dbconnect = require('./db');

//routes
const recipeRoutes = require('./routes/recipe');

const app = express();

//default view engine
app.set('view engine', 'pug');
app.set('views', 'views');

//path to css and js files (frontend)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(recipeRoutes);

//db connect and start server
mongoose
  .connect(dbconnect)
  .then((result) => {
    console.log('Connected to DB');
    app.listen(3000);
  })
  .catch((err) => console.log(err));
