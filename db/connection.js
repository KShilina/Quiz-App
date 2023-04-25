// PG database client/connection setup
const { Pool } = require('pg');

const dbParams = {
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "12345",
  database: "midterm"
};

// DB_HOST=localhost
// DB_USER=postgres
// DB_PASS=12345
// DB_NAME=midterm
// # Uncomment and set to true for Heroku
// # DB_SSL=true if heroku
// DB_PORT=5432

const db = new Pool(dbParams);

db.connect();

module.exports = db;
