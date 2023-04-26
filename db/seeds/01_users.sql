-- Users table seeds here (Example)
INSERT INTO users (id, name)
VALUES (1, 'Alice');

INSERT INTO users (id, name)
VALUES (2, 'Kate');

INSERT INTO users (id, name)
VALUES (3, 'Bob');

INSERT INTO users (id, name)
VALUES (4, 'Rick');

INSERT INTO users (id, name)
VALUES (5, 'John');

INSERT INTO categories (id, name)
VALUES (1, 'Introduction to Backend');

INSERT INTO categories (id, name)
VALUES (2, 'Introduction to SQL');

INSERT INTO categories (id, name)
VALUES (3, 'Introduction to JavaScript');

INSERT INTO quizzes (id, quiz_url, is_public, owner_id, categories_id, max_questions)
VALUES (2, ' ', FALSE, 1, 1, 5);

INSERT INTO quizzes (id, quiz_url, is_public, owner_id, categories_id, max_questions)
VALUES (3,' ', true, 1, 3, 5);

INSERT INTO quizzes (id, quiz_url, is_public, owner_id, categories_id, max_questions)
VALUES (3,' ', true, 2, 1, 5);

INSERT INTO quizzes (id, quiz_url, is_public, owner_id, categories_id, max_questions)
VALUES (4,' ', true, 2, 3, 5);


INSERT INTO questions (id, question, answer, option1, option2, option3, option4, quiz_id)
VALUES (1, 'What do we use POST request for?', 'For sending data to the server', 'For sending data to the server', 'For retrieving data from the server', 'Request method and protocol', 'We never use POST only GET', 1);

INSERT INTO questions (id, question, answer, option1, option2, option3, option4, quiz_id)
VALUES (3, 'What is in the response body of a servers response to GET request?', 'The data that the cleint requested', 'The data that the cleint requested', 'Headers offering information about the response format', 'Response method and protocol', 'We never use GET request', 1);

INSERT INTO questions (id, question, answer, option1, option2, option3, option4, quiz_id) VALUES (2, 'Which SQL statement is used to extract data from a database?',
'SELECT',
'GET',
'EXTRACT',
'OPEN',
'SELECT',
2);

INSERT INTO questions (id, question, answer, option1, option2, option3, option4, quiz_id) VALUES (5, 'With SQL, how do you select all the columns from a table named "Persons"?',
'SELECT * FROM Persons',
'SELECT * FROM Persons',
'SELECT * .Persons',
'SELECT [all] FROM Persons',
'SELECT Persons',
2);

INSERT INTO questions (id, question, answer, option1, option2, option3, option4, quiz_id) VALUES (6, 'With SQL, how do you select all the records from a table named "Persons" where the value of the column "FirstName" starts with an "a"?',
'SELECT * FROM Persons WHERE FirstName="a%"',
'SELECT * FROM Persons WHERE FirstName LIKE "%a"',
'SELECT * FROM Persons WHERE FirstName="a"',
'SELECT * FROM Persons WHERE FirstName="%a%"',
'SELECT * FROM Persons WHERE FirstName="a%"',
2);

INSERT INTO questions (id, question, answer, option1, option2, option3, option4, quiz_id) VALUES (7, 'Which SQL keyword is used to sort the result-set?',
'ORDER BY',
'SORT',
'ORDER BY',
'SORT BY',
'ORDER',
2);

INSERT INTO questions (id, question, answer, option1, option2, option3, option4, quiz_id) VALUES (8, 'With SQL, how can you return the number of records in the "Persons" table?',
'SELECT COUNT() FROM Persons',
'SELECT LEN() FROM Persons',
'SELECT COLUMNS() FROM Persons',
'SELECT COUNT() FROM Persons',
'SELECT NO(*) FROM Persons',
2);


INSERT INTO questions (id, question, answer, option1, option2, option3, option4, quiz_id) VALUES (9, 'What is the correct way to write an arrow function?',
'const myFunction = (arg) => {<function-body>}',
'const myFunction = function(arg) => {<function-body>}',
'const myFunction => function(arg) {<function-body>}',
'const myFunction = (arg) => {<function-body>}',
'const myFunction = function(arg) {<function-body>}',
3);


INSERT INTO questions (id, question, answer, option1, option2, option3, option4, quiz_id) VALUES (10, 'What method is used to divide a string into an array?',
'.split',
'.split',
'.map',
'.foreach',
'.push',
3);


INSERT INTO questions (id, question, answer, option1, option2, option3, option4, quiz_id) VALUES (11, 'Which of the following is not a JavaScript data type?',
'Function',
'Number',
'String',
'Boolean',
'Function',
3);


INSERT INTO questions (id, question, answer, option1, option2, option3, option4, quiz_id) VALUES (12, 'What is the error with the following function implementation?
const myFunction = function(arg) {
  let newArr = [];
  for (let i = 0; i > arg.length; i++) {
    newArr.push(arg[i] * 5);
  }
  return newArr;
}
',
'for loop is defined incorrectly',
'values are primitive data types and cannot be manipulated',
'for loop is defined incorrectly',
'variable declaration keyword is incorrect',
'semicolon use is not correct',
3);


INSERT INTO questions (id, question, answer, option1, option2, option3, option4, quiz_id) VALUES (13, 'What is the correct method for error handling when using promises?',
'.catch',
'.then',
'.catch',
'.push',
'.isArray',
4);

INSERT INTO questions (id, question, answer, option1, option2, option3, option4, quiz_id) VALUES (14, 'What is the first parameter of a fetch function?',
'the url that data is being retrieved from',
'the url that data is being retrieved from',
'the callback that handles errors',
'the parameter of the .catch method',
'the data type that the data will be retrieved in',
4);


INSERT INTO questions (id, question, answer, option1, option2, option3, option4, quiz_id) VALUES (15, 'String interpolation is the only way to log passed arguments to the console?',
'true',
'true',
'false',
'tru',
'falsee',
4);





INSERT INTO results (id, users_id, quiz_id, result_url, is_pass, created_at)
VALUES (3, 1, 1, ' ', true, '2023-04-25');

INSERT INTO results (id, users_id, quiz_id, result_url, is_pass, created_at)
VALUES (2, 1, 1, ' ', true, '2023-04-25');





