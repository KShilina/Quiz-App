-- Users table seeds here (Example)
INSERT INTO users (id, name)
VALUES (1, 'Alice');

INSERT INTO categories (id, name)
VALUES (1, 'Introduction to Backend');

INSERT INTO quizzes (id, quiz_url, is_public, owner_id, categories_id, max_questions)
VALUES (1," ", true, 1, 1, 5);

INSERT INTO results (id, users_id, quiz_id, result_url, is_pass, created_at)
VALUES (1, 1, 1, " ", true, "2023-04-25");

INSERT INTO questions (id, question, answer, option1, option2, option3, option4, quiz_id)
VALUES (1, "What do we use POST request for?", "For sending data to the server", "For sending data to the server", "For retrieving data from the server", "Request method and protocol", "We never use POST only GET", 1);


INSERT INTO users (id, name)
VALUES (2, 'Bob');

INSERT INTO categories (id, name)
VALUES (1, 'Introduction to Backend');

INSERT INTO quizzes (id, quiz_url, is_public, owner_id, categories_id, max_questions)
VALUES (2," ", true, 2, 1, 5);

INSERT INTO results (id, users_id, quiz_id, result_url, is_pass, created_at)
VALUES (2, 2, 2, " ", true, "2023-04-24");

INSERT INTO questions (id, question, answer, option1, option2, option3, option4, quiz_id)
VALUES (2, "What do we use POST request for?", "For sending data to the server", "For sending data to the server", "For retrieving data from the server", "Request method and protocol", "We never use POST only GET", 1);



