const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
       return data.rows;
    });
};

// all quizzes
const getAllQuizzes = () => {
  return db.query('SELECT * FROM quizzes;')
  .then(data => {
    return data.rows;
  });
};

// all results
const getAllResults = () => {
  return db.query('SELECT * FROM results;')
  .then(data => {
    return data.rows;
  });
};


module.exports = {
  getUsers,
  getAllQuizzes,
  getAllResults,

};
