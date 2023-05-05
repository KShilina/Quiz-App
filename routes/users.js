/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/users");

router.get("/", (req, res) => {
  const templateVars = {
    name: "John",
  };
  res.render("users", templateVars);
});

// http://localhost:8080/users/users_quizzes/1
router.get("/users_quizzes/:id", (req, res) => {
  const owner_id = req.params.id;
  userQueries
    .getAllQuizzes(owner_id)
    .then((quizzes) => {
      res.render("myquizzes", { quizzes });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/results/:id", (req, res) => {
  const owner_id = req.params.id;
  userQueries
    .getAllResults(owner_id)
    .then((results) => {
      console.log(results);
      // userQueries.calculateScore()
      res.render("results", { results });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/users_quizzes/quiz/:id", (req, res) => {
  const quiz_id = req.params.id;
  userQueries
    .takeQuiz(quiz_id)
    .then((quiz) => {
      res.render("quiz", { quiz_id, quiz });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/users_quizzes/quiz/:id", (req, res) => {
  const quiz_id = req.params.id;
  console.log(req.body);
  //implement data validation
  // turn object into array
  // find length of array
  // res.status(400).send or .render
  // or render same page with req.body.questions with prefilled options
  userQueries
    .getQuizAnswers(quiz_id)
    .then((correctAnswers) => {
      const userScore = userQueries.calculateScore(
        req.body.questions,
        correctAnswers
      );
      const body = { score: userScore, users_id: 1, quiz_id: req.params.id };
      console.log(body);
      return userQueries.addResult(body);
    })
    .then(() => {
      res.redirect(`/users/results/${1}`);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// });

router.post("/submit_form", (req, res) => {
  // try {
  //   const body = {...req.body, owner_id: 1}
  //   const quiz = await userQueries.addQuiz(body);
  //   const question = await userQueries.addQuestion(req.body, quiz.id);
  //   console.log('quiz', quiz) // singular quiz that was just added

  //   res.redirect(`/users/users_quizzes/${1}`)
  // } catch (err) {
  //   res.status(500).json({ error: err.message });
  // }

  const body = { ...req.body, owner_id: 1 };
  userQueries
    .addQuiz(body)
    .then((quiz) => {
      //add question
      return userQueries.addQuestion(req.body, quiz.id);
    })
    .then((question) => {
      res.redirect(`/users/users_quizzes/${1}`);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/", (req, res) => {
  userQueries
    .showQuizzes(req.query)
    .then((quizzes) => {
      res.render("index", { quizzes });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
