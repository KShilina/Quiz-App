const db = require('../connection');

// // get all users
// const getUsers = () => {
//   return db.query('SELECT * FROM users;')
//     .then(data => {
//        return data.rows;
//     });
// };

// get all quizzes
// const getAllQuizzes = () => {
//   return db.query('SELECT * FROM quizzes;')
//   .then(data => {
//     return data.rows;
//   });
// };

/**
 * Get all quzzes sorted by a single user.
 * @param {string} owner_id The id of the user.
 * @return {Promise<[{}]>} A promise to the quizzes.
 */
const getAllQuizzes = function (owner_id) {
  return db
    .query(
      `SELECT title, categories.name
      FROM quizzes
      JOIN categories ON categories_id = categories.id
      WHERE owner_id=$1;
      `, [owner_id]
    )
    .then((res) => {
      return res.rows;
    });
};

// get all results
const getAllResults = () => {
  return db.query('SELECT * FROM results;')
  .then(data => {
    return data.rows;
  });
};

/**
 * Add a quiz to the database
 * @param {{}} quiz An object containing all of the quiz details.
 * @return {Promise<{}>} A promise to the quiz.
 */

// add quiz

const addQuiz = function(quiz) {
  //add quiz data to db
  return db
    .query(
      "INSERT INTO quizzes (quiz_url, is_public, owner_id,categories_id, max_questions, title) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        quiz.quiz_url,
        quiz.is_public,
        quiz.owner_id,
        quiz.categories_id,
        quiz.max_questions,
        quiz.title
      ]
    )
    .then((res) => {
      return res.rows[0];
    });
};

// adding a question to the quiz

const addQuestion = function(question, quiz_id) {
  return db
    .query(
      "INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        question.question1,
        question.q1_correct,
        question.q1_ans_1,
        question.q1_ans_2,
        question.q1_ans_3,
        question.q1_ans_4,
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




module.exports = {
  // getUsers,
  getAllQuizzes,
  getAllResults,
  addQuiz,
  addQuestion,
};
