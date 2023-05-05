// load .env data into process.env
require("dotenv").config();
const userQueries = require("./db/queries/users");

// Web server config
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;
const app = express();

app.set("view engine", "ejs"); //use EJS as our template egine

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true })); //parses body of form request string as object
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static("public")); //serve static files via public directory(CSS, images, etc)

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own

const usersRoutes = require("./routes/users");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

app.use("/users", usersRoutes);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

//home page
app.get("/", (req, res) => {
  userQueries
    .showQuizzes(req.query)
    .then((quizzes) => {
      res.render("index", { quizzes });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//show form page
app.get("/submit_form", (req, res) => {
  res.render("form");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
