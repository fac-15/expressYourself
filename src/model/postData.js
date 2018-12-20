const dbConnection = require("../../db/db_connection");

// have to post languages to languages table
const postDataLanguages = (name, bio, html, css, js, sql, node) => {
  console.log("test inside", name, bio, html, css, js, sql, node);
  // if (err) console.log(err);

  dbConnection.query(
    "INSERT INTO users (name, bio) VALUES ($1, $2) RETURNING id",
    [name, bio],
    (err, userRes) => {
      if (err) return err;

      dbConnection.query(
        "INSERT INTO languages (user_id, html, css, js, sql, node) VALUES ($1, $2, $3, $4, $5, $6)",
        [userRes.rows[0].id, html, css, js, sql, node],
        err => {
          if (err) return err;
        }
      );
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
