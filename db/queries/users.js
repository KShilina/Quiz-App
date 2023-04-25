const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
       return data.rows;
    });
};

const getAllQuizzes = () => {
  return db.query('SELECT * FROM quizzes;')
  .then(data => {
    console.log(data.rows);
  });
};
getAllQuizzes();

// all results



module.exports = { getUsers };
