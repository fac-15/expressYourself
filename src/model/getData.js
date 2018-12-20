const dbConnection = require("../../db/db_connection");

// use this with GET request to output all user data
const getUserData = cb => {
  dbConnection.query(
    `select * from languages inner join users on users.id = languages.user_id`, 
    (err, res) => {
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
  dbConnection.query(
    `SELECT * FROM users WHERE name = '${name}'`,
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        console.log(res.rows);
        cb(null, res.rows);
      }
    }
  );
};


const getSpecificSkills = (id, cb) => {
  dbConnection.query(
    `SELECT * FROM languages WHERE user_id = '${id}'`,
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        console.log(res.rows);
        cb(null, res.rows);
      }
    }
  );
};


module.exports = {
  getUserData,
  getLanguageData,
  getSpecificUser,
  getSpecificSkills
};
