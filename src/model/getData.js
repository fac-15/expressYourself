const dbConnection = require('../db/db_connection');

const getUserData = cb => {
    dbConnection.query(`SELECT * FROM users`, (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    });
  };
  
  const getLanguageData = cb => {
    dbConnection.query(`SELECT * FROM languages`, (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    });
  };


const getSpecificUser = (name, cb) => {
  dbConnection.query(`SELECT * FROM users WHERE name = '${name}'`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      console.log(res.rows);
      cb(null, res.rows);
    }
  });
}

module.exports = {
  getUserData,
  getLanguageData,
  getSpecificUser,

}