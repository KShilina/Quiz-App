-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS quizzes CASCADE;
DROP TABLE IF EXISTS results CASCADE;
DROP TABLE IF EXISTS questions CASCADE;


CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_url VARCHAR(255),
  is_public BOOLEAN NOT NULL DEFAULT TRUE,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE DEFERRABLE INITIALLY DEFERRED,
  categories_id INTEGER REFERENCES categories(id) ON DELETE CASCADE DEFERRABLE INITIALLY DEFERRED,
  max_questions VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL
);



CREATE TABLE results (
  id SERIAL PRIMARY KEY NOT NULL,
  users_id INTEGER REFERENCES users(id) ON DELETE CASCADE DEFERRABLE INITIALLY DEFERRED,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE DEFERRABLE INITIALLY DEFERRED,
  result_url VARCHAR(255),
  is_pass BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  question TEXT,
  answer TEXT,
  option1 VARCHAR(255),
  option2 VARCHAR(255),
  option3 VARCHAR(255),
  option4 VARCHAR(255),
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE DEFERRABLE INITIALLY DEFERRED
);




