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
      console.log("Error has occured:", err.message);
      res.send("Error has occured:", err.message);
    });
});

router.get("/results/:id", (req, res) => {
  const owner_id = req.params.id;
  userQueries
    .getAllResults(owner_id)
    .then((results) => {
      console.log(results);
      res.render("results", { results });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
      console.log("Error has occured:", err.message);
      res.send("Error has occured:", err.message);
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
      console.log("Error has occured:", err.message);
      res.send("Error has occured:", err.message);
    });
});

router.post("/users_quizzes/quiz/:id", (req, res) => {
  const quiz_id = req.params.id;
  userQueries
    .getQuizAnswers(quiz_id)
    .then((correctAnswers) => {
      const userScore = userQueries.calculateScore(
        req.body.questions,
        correctAnswers
      );
      const body = { score: userScore, users_id: 1, quiz_id: req.params.id };
      return userQueries.addResult(body);
    })
    .then(() => {
      res.redirect(`/users/results/${1}`);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
      console.log("Error has occured:", err.message);
      res.send("Error has occured:", err.message);
    });
});

router.post("/submit_form", (req, res) => {
  const body = { ...req.body, owner_id: 1 };
  userQueries
    .addQuiz(body)
    .then((quiz) => {
      //add question
      const question1 = {
        question: req.body.question1,
        opt1: req.body.q1_ans_1,
        opt2: req.body.q1_ans_2,
        opt3: req.body.q1_ans_3,
        opt4: req.body.q1_ans_4,
        ans: req.body.q1_correct,
      };

      const question2 = {
        question: req.body.question2,
        opt1: req.body.q2_ans_1,
        opt2: req.body.q2_ans_2,
        opt3: req.body.q2_ans_3,
        opt4: req.body.q2_ans_4,
        ans: req.body.q2_correct,
      };

      const question3 = {
        question: req.body.question3,
        opt1: req.body.q3_ans_1,
        opt2: req.body.q3_ans_2,
        opt3: req.body.q3_ans_3,
        opt4: req.body.q3_ans_4,
        ans: req.body.q3_correct,
      };

      const question4 = {
        question: req.body.question4,
        opt1: req.body.q4_ans_1,
        opt2: req.body.q4_ans_2,
        opt3: req.body.q4_ans_3,
        opt4: req.body.q4_ans_4,
        ans: req.body.q4_correct,
      };
      const question5 = {
        question: req.body.question5,
        opt1: req.body.q5_ans_1,
        opt2: req.body.q5_ans_2,
        opt3: req.body.q5_ans_3,
        opt4: req.body.q5_ans_4,
        ans: req.body.q5_correct,
      };

      const questions = [question1, question2, question3, question4, question5];
      for (let question of questions) {
        userQueries.addQuestion(question, quiz.id);
      }
    })
    .then((data) => {
      res.redirect(`/users/users_quizzes/${1}`);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
      console.log("Error has occured:", err.message);
      res.send("Error has occured:", err.message);
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
      console.log("Error has occured:", err.message);
      res.send("Error has occured:", err.message);
    });
});

module.exports = router;
