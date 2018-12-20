const dbConnection = require("../../db/db_connection");

const postDataLanguages = (html, css, js, sql, node, cb) => {
  if (err) console.log(err);
  dbConnection.query(
    "INSERT INTO users (user_id, html, css, js, sql, node) VALUES ($1, $2, $3, $4, $5, $6)",
    (error, res) => {
      if (err) {
        return cb(error);
      } else {
        cb(null, res);
      }
    }
  );
};

const postDataUser = (name, bio, cb) => {
  if (err) console.log(err);
  databaseConnection.query(
    "INSERT INTO users (name, password) VALUES ($1, $2)",
    (error, res) => {
      if (err) {
        return cb(error);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = {
  postDataLanguages,
  postDataUser
};
