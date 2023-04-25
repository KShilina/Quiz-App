// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  // using encrypted cookies
  console.log('test');
  res.render('login.ejs');
  req.session.user_id = req.params.id;
});

app.post('/login', (req, res) => {
  console.log('test');
  req.session.user_id = req.params.id;
  res.redirect('login.ejs');//use the post routs only for redirect and put it at the end
});

app.get('/submit_form', (req, res) => {
  console.log('submit');
  res.render('form.ejs');
});

app.get('/quiz/:id', (req, res) => {
  console.log('quiz');
  res.render('quiz.ejs');
});

app.post('/submit_form', (req, res) => {
  console.log('submit');
res.redirect('/');
});

app.get("/myquizzes", (req, res) => {
  res.send('This is the existing quizzes page');
});

app.get("/results", (req, res) => {
  res.send("This is the results page");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
