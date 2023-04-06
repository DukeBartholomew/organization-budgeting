import { connection } from "../mysql/connect.js";

async function createUser(user) {
  const { userName, password, firstName, lastName, age, admin } = user;
  const query = `
  INSERT INTO users 
  (userName, password, firstName, lastName, age, admin) 
  VALUES (?, ?, ?, ?, ?, ?)`;
  try {
    const results = await connection.query(query, [
      userName,
      password,
      firstName,
      lastName,
      age,
      admin,
    ]);
    return results[0].insertId;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

async function getAllUsers() {
  const query = `
  SELECT * 
  FROM users`;
  const [rows] = await connection.query(query);
  console.log(rows);
  return rows;
}

async function getUserByUsername(username) {
  const query = `
    SELECT * 
    FROM users
    WHERE username = ?`;
  const [rows] = await connection.query(query, [username]);
  return rows[0];
}

async function getUserById(id) {
  const query = `
    SELECT * 
    FROM users 
    WHERE userId = ?`;
  const [rows] = await connection.query(query, [id]);
  console.log(rows);
  return rows[0];
}

async function deleteAllUsers() {
  const query = `DELETE FROM users`;
  const results = await connection.query(query);
  console.log(results[0].affectedRows);
  return results[0].affectedRows;
}

export {
  createUser,
  getAllUsers,
  getUserByUsername,
  getUserById,
  deleteAllUsers,
};
