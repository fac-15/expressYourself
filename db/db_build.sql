BEGIN;

DROP TABLE IF EXISTS users, languages CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  bio TEXT NOT NULL
);

CREATE TABLE languages (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  html INTEGER NOT NULL,
  css INTEGER NOT NULL,
  js INTEGER NOT NULL,
  sql INTEGER NOT NULL,
  node INTEGER NOT NULL
);



INSERT INTO users (name, bio) VALUES
(
'Sandra',
'Is a code ninja'
),
(
'Jason',
'Is a soon to be code ninja'
),
(
'Martin',
'Is the DOM god'
),
(
'Mike',
'Love bagels while coding'
);

COMMIT;
-- INSERT INTO languages (user_id, html, css, js, sql, node) VALUES
-- ()
