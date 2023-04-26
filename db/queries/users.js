const db = require('../connection');

// get all users
const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
       return data.rows;
    });
};

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
const getAllQuizzes = function (owner_id, limit = 10) {
  return pool
    .query(
      `
      SELECT owner_id, questions.question
      FROM quizzes
      JOIN questions ON quizzes.id = questions.quiz_id
      LIMIT $2;`,
      [owner_id, limit]
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

const addQuiz = function (quiz) {
  return pool
    .query(
      "INSERT INTO quizzes (quiz_url, is_public, owner_id,categories_id, max_questions) VALUES($1, $2, $3, $4, $5 ) RETURNING *",
      [
        quiz.quiz_url,
        quiz.is_public,
        quiz.owner_id,
        quiz.categories_id,
        quiz.max_questions,
      ]
    )
    .then((res) => {
      console.log(res.rows[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getUsers,
  getAllQuizzes,
  getAllResults,
  addQuiz,
};
