const db = require("../connection");

/**
 * Get all quzzes sorted by a single user.
 * @param {string} owner_id The id of the user.
 * @return {Promise<[{}]>} A promise to the quizzes.
 */
const getAllQuizzes = function (owner_id) {
  return db
    .query(
      `SELECT title, quizzes.id
      FROM quizzes
      WHERE owner_id=$1;
      `,
      [owner_id]
    )
    .then((res) => {
      return res.rows;
    });
};

// get all results
const getAllResults = function (owner_id) {
  return db
    .query(
      `
  SELECT results.score, results.created_at, quizzes.title
  FROM results
  JOIN quizzes ON quiz_id = quizzes.id
  WHERE owner_id=$1
  GROUP BY results.score, results.created_at, quizzes.title
  ORDER BY results.created_at DESC LIMIT 1;
  `,
      [owner_id]
    )
    .then((data) => {
      return data.rows;
    });
};

const showQuizzes = () => {
  return db
    .query(
      `SELECT quizzes.id, title
      FROM quizzes
      WHERE is_public = true
      LIMIT 3;`
    )
    .then((result) => {
      return result.rows;
    });
};

/**
 * Add a quiz to the database
 * @param {{}} quiz An object containing all of the quiz details.
 * @return {Promise<{}>} A promise to the quiz.
 */

// add quiz to db
const addQuiz = function (quiz) {
  return db
    .query(
      "INSERT INTO quizzes (is_public, owner_id, max_questions, title) VALUES($1, $2, $3, $4) RETURNING *",
      [quiz.is_public, quiz.owner_id, quiz.max_questions, quiz.title]
    )
    .then((res) => {
      return res.rows[0];
    });
};

//take quiz with an uniq id
const takeQuiz = function (quiz_id) {
  return db
    .query(
      `SELECT questions.id, quizzes.title, questions.question, questions.option1,questions.option2, questions.option3, questions.option4
          FROM quizzes
          JOIN questions ON quiz_id = quizzes.id
          WHERE quiz_id = $1;
          `,
      [quiz_id]
    )
    .then((res) => {
      return res.rows;
    });
};

// adding a question to the quiz
//The question parameter is an object that contains the details of the question (question text, answer, and four options). The quiz_id parameter is the ID of the quiz that the question belongs to.
//The RETURNING * clause at the end of the SQL statement returns the inserted row as an object.
const addQuestion = function (question, quiz_id) {
  return db
    .query(
      "INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        question.question,
        question.ans,
        question.opt1,
        question.opt2,
        question.opt3,
        question.opt4,
        quiz_id,
      ]
    )

    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      return err;
    });
};

const addResult = function ({ score, users_id, quiz_id }) {
  return db
    .query(
      `INSERT INTO results (users_id, quiz_id, score) VALUES($1, $2, $3) RETURNING *`,
      [users_id, quiz_id, score]
    )
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      return err;
    });
};
const getQuizAnswers = function (quiz_id) {
  return db
    .query(
      `SELECT questions.id, question, answer
    FROM questions
    WHERE quiz_id = $1`,
      [quiz_id]
    )
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      return err;
    });
};

const calculateScore = function (userAns, dbAns) {
  let score = 0;
  for (let correctAns of dbAns) {
    const key = `number${correctAns.id}`; //gives us a key
    if (correctAns.answer == Number(userAns[key])) {
      score++;
    }
  }
  return score;
};

module.exports = {
  getAllQuizzes,
  getAllResults,
  addQuiz,
  addQuestion,
  takeQuiz,
  showQuizzes,
  addResult,
  getQuizAnswers,
  calculateScore,
};
