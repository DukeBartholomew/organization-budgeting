//connects to the database
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BeOrganized",
  database: "DBUI",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to DB in /services/users.service/");
});

async function createUser(info) {
  return await new Promise((resolve, reject) => {
    const { id, first, last, username, password, age, admin } = info;
    const query = `INSERT INTO users (userId, firstName, lastName, userName, userPassword, age, admin) VALUES (${id}, '${first}', '${last}', '${username}', '${password}', ${age}, ${admin})`
    connection.query(query, (err, result, fields) => {
      if (err) throw err;
      resolve({
        id: result.insertId,
        first: info.first,
        last: info.last,
        username: info.username,
        password: info.password,
        age: info.age,
        admin: info.admin,
      });
    });
  });
}

async function getAllUsers() {
  return await new Promise((resolve, reject) => {
    const query = `SELECT * FROM users`;
    connection.query(query, (err, result, fields) => {
      if (err) throw err;
      console.log(result);
      resolve(result);
    });
  });
}

async function getUserById(id) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM users WHERE userId=${id}`;
    connection.query(query, (err, result, fields) => {
      if (err) throw err;
      console.log(result);
      resolve(result);
    });
  });
}

async function deleteAllUsers() {
  return await new Promise((resolve, reject) => {
    const query = `DELETE FROM users`;
    connection.query(query, (err, result, fields) => {
      if (err) throw err;
      resolve(result.affectedRows);
    });
  });
}

async function isValidCredentials(username, password, callback) {
  return await new Promise((resolve, reject) => {
    const query = `SELECT * FROM users WHERE userName = "${username}" AND userPassword = "${password}"`;
    connection.query(query, [username, password], (err, result, fields) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(result);
        if (result.length == 1) {
          console.log("Username:", username);
          console.log("Password:", password);
          resolve(true);
        } else {
          console.log("Username:", username);
          console.log("Password:", password);
          resolve(false);
        }
      }
    });
  });
}

module.exports = { createUser, getAllUsers, getUserById, deleteAllUsers, isValidCredentials };
