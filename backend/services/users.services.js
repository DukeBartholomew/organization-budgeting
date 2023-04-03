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
    const { first, last, age, admin } = info;
    const query = `INSERT INTO users (firstName, lastName, age, admin) VALUES ('${first}', '${last}', ${age}, ${admin})`;
    connection.query(query, (err, result, fields) => {
      if (err) throw err;
      resolve({
        id: result.insertId,
        first: info.first,
        last: info.last,
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

module.exports = { createUser, getAllUsers, getUserById, deleteAllUsers };
