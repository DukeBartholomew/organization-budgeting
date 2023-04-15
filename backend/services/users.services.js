import { connection } from "../mysql/connect.js";

async function createUser(user) {
  const { username, password, firstName, lastName, age, admin } = user;
  const query = `
  INSERT INTO users 
  (username, password, firstName, lastName, age, admin) 
  VALUES (?, ?, ?, ?, ?, ?)`;
  try {
    const results = await connection.query(query, [
      username,
      password,
      firstName,
      lastName,
      age,
      admin,
    ]);
    return {
      userId: results[0].insertId,
      username,
      password,
      firstName,
      lastName,
      age,
      admin,
    };
  } catch (error) {
    console.log(error);
  }
}

async function getAllUsers() {
  const query = `
  SELECT * 
  FROM users`;
  const [rows] = await connection.query(query);
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
  return rows[0];
}

async function deleteAllUsers() {
  const query = `DELETE FROM users`;
  const results = await connection.query(query);
  return results[0].affectedRows;
}

export {
  createUser,
  getAllUsers,
  getUserByUsername,
  getUserById,
  deleteAllUsers,
};
