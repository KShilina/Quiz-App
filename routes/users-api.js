/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

// router.get('/', (req, res) => {
//   userQueries.getUsers()
//     .then(users => {
//       res.json({ users });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });
//? = queries, :  = params;
router.get('/users_quizzes/:id', (req, res) => {
  const owner_id = req.params.id;
  userQueries.getAllQuizzes(owner_id)
    .then(quizzes => {
      res.json({ quizzes });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/users_quizzes/quiz/:id', (req,res) =>{
  const quiz_id = req.params.id;
  userQueries.takeQuiz(quiz_id)
  .then(quizzes =>{
    res.json({quizzes});
  })
  .catch(err =>{
    res.
    status(500)
    .json({error:err.message});
  });
});

// submit quiz

// router.post('/submit_form', (req, res) => {
//   userQueries.addQuiz(req.body)
//     .then(quiz => {
//       //add question
//       userQueries.addQuestion(req.body, quiz.id)
//       .then(question => {
//         res.json({ question });
//       })
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });

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
  .then(quiz => {
    res.json(quiz);
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
