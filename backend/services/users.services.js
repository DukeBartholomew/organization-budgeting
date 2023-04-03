const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BeOrganized",
  database: "DBUI",
});

connection.connect();

async function createUser(req, res) {
  const { first, last, age, admin } = req.body;
  const query = `INSERT INTO users (firstName, lastName, age, admin) VALUES ('${first}', '${last}', ${age}, ${admin})`;
  connection.query(query, (err, rows, fields) => {
    if (err) throw err;

    console.log(rows);
    res.status(200);
    res.send("Successfully added user!");
  });
}

async function getAllUsers(req, res) {
  const query = `SELECT * FROM users`;
  connection.query(query, (err, rows, fields) => {
    if (err) throw err;

    console.log(rows);
    res.status(200);
    res.send(rows);
  });
}

async function deleteAllUsers(req, res) {
  const query = `DELETE FROM users`;
  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.log("HERE");
      throw err;
    }
    console.log(rows);

    res.status(200);
    res.send("Successfully deleted all users!");
  });
}

module.exports = { createUser, getAllUsers, deleteAllUsers };
