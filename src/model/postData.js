const dbConnection = require("../../db/db_connection");

// have to post languages to languages table
const postDataLanguages = (html, css, js, sql, node) => {
  console.log("test inside", html, css, js, sql, node);
  // if (err) console.log(err);
  dbConnection.query(
    "INSERT INTO languages (user_id, html, css, js, sql, node) VALUES ($1, $2, $3, $4, $5, $6)",
    [3, html, css, js, sql, node],
    (err, peopleRes) => {
      if (err) return err;
    }
  );
};

const postDataUser = (name, bio, cb) => {
  if (err) console.log(err);
  dbConnection.query(
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
