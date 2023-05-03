/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');




// });




router.post('/submit_form', (req, res) => {
  userQueries.addQuiz(req.body)
    .then(quiz => {
      //add question
      return userQueries.addQuestion(req.body, quiz.id)
    })
    .then(question => {
      res.json({ question });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});

router.get("/", (req, res) => {
  userQueries.showQuizzes(req.query)
  .then(results => {
    res.render('index', { title: results.title, category: results.category });
  })
  .catch(err => {
    res.status(500).json({ error: err.message })
  });
})

router.post('/results',(req, res) =>{
  res.redirect('results/:id_results');
});

// router.get('user')

module.exports = router;
