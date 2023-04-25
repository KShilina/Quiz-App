const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
       return data.rows;
    });
};

console.log(getUsers());

module.exports = { getUsers };
