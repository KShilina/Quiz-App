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

INSERT INTO quizzes (is_public, owner_id, max_questions,title)
VALUES (true, 1, 5, 'SQL statements');

INSERT INTO quizzes (is_public, owner_id, max_questions, title)
VALUES (true, 1, 5,'Backend quiz');

INSERT INTO quizzes (is_public, owner_id, max_questions, title)
VALUES (true, 2, 5,'JavaScript quiz 2');

INSERT INTO quizzes (is_public, owner_id, max_questions,title)
VALUES (false, 2, 5,'JavaScript quiz 3');


INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id)
VALUES ('What do we use POST request for?', 1, 'For sending data to the server', 'For retrieving data from the server', 'Request method and protocol', 'We never use POST only GET', 2);

INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id)
VALUES ('What is the purpose of a GET request?', 1, 'The purpose of a GET request is to retrieve data or a resource from a specified server using a given URI', 'For posting data from the server', 'To insert data into our database', 'We never use Get only POST', 2);

INSERT INTO questions ( question, answer, option1, option2, option3, option4, quiz_id)
VALUES ('What is in the response body of a servers response to GET request?', 1, 'The data that the cleint requested', 'Headers offering information about the response format', 'Response method and protocol', 'We never use GET request', 2);

INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id)
VALUES ('What is the object for retrieving URL parameters?', 3, 'req.body', 'req.cookies', 'req.params', 'there is no way to retrieve URL parameters', 2);

INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id)
VALUES ('What syntax is used for retrieving data from a certain URL', 4, '.then', '.get', '.post', 'fetch', 2);


INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES ('Which SQL statement is used to extract data from a database?',
4,
'GET',
'EXTRACT',
'OPEN',
'SELECT',
1);

INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES ('With SQL, how do you select all the columns from a table named "Persons"?',
1,
'SELECT * FROM Persons',
'SELECT * .Persons',
'SELECT [all] FROM Persons',
'SELECT Persons',
1);

INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES ('With SQL, how do you select all the records from a table named "Persons" where the value of the column "FirstName" starts with an "a"?',
4,
'SELECT * FROM Persons WHERE FirstName LIKE "%a"',
'SELECT * FROM Persons WHERE FirstName="a"',
'SELECT * FROM Persons WHERE FirstName="%a%"',
'SELECT * FROM Persons WHERE FirstName="a%"',
1);

INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES ('Which SQL keyword is used to sort the result-set?',
2,
'SORT',
'ORDER BY',
'SORT BY',
'ORDER',
1);

INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES ('With SQL, how can you return the number of records in the "Persons" table?',
3,
'SELECT LEN() FROM Persons',
'SELECT COLUMNS() FROM Persons',
'SELECT COUNT() FROM Persons',
'SELECT NO(*) FROM Persons',
1);


INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES ('What is the correct way to write an arrow function?',
3,
'const myFunction = function(arg) => {<function-body>}',
'const myFunction => function(arg) {<function-body>}',
'const myFunction = (arg) => {<function-body>}',
'const myFunction = function(arg) {<function-body>}',
3);


INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES ('What method is used to divide a string into an array?',
1,
'.split',
'.map',
'.foreach',
'.push',
3);


INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES ('Which of the following is not a JavaScript data type?',
4,
'Number',
'String',
'Boolean',
'Function',
3);

INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES ('which style of loop is most common for looping though objects?',
3,
'for',
'for of',
'for in',
'while',
3);

INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES ('What is the error with the following function implementation?
const myFunction = function(arg) {
  let newArr = [];
  for (let i = 0; i > arg.length; i++) {
    newArr.push(arg[i] * 5);
  }
  return newArr;
}
',
2,
'values are primitive data types and cannot be manipulated',
'for loop is defined incorrectly',
'variable declaration keyword is incorrect',
'semicolon use is not correct',
3);

INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES ('What is the correct method for error handling when using promises?',
2,
'.then',
'.catch',
'.push',
'.isArray',
4);

INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES ('what is the general keyword used in an if statement to excecute code if a condition is not met?',
4,
'then',
'!',
'not',
'else',
4);

INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES ('What is the first parameter of a fetch function?',
1,
'the url that data is being retrieved from',
'the callback that handles errors',
'the parameter of the .catch method',
'the data type that the data will be retrieved in',
4);

INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES ('String interpolation is the only way to log passed arguments to the console?',
1,
'true',
'false',
'tru',
'falsee',
4);

INSERT INTO questions (question, answer, option1, option2, option3, option4, quiz_id) VALUES ('What is the correct syntax for interpolating a string?',
1,
'${}',
'$()',
'${()}',
'()$',
4);

INSERT INTO results (users_id, quiz_id, score, created_at)
VALUES ( 1, 1, 0, '2023-04-25');

INSERT INTO results (users_id, quiz_id, score, created_at)
VALUES (1, 2, 0, '2023-04-25');


INSERT INTO results (users_id, quiz_id, score, created_at)
VALUES (3, 4, 5, '2023-05-02');
