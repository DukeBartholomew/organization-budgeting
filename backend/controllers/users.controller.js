import {
  createUser,
  getAllUsers,
  getUserById,
  deleteAllUsers,
} from "../services/users.services.js";

async function createUserHandler(req, res) {
  try {
    const newUser = await createUser(req.body);
    console.log(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

async function getAllUsersHandler(req, res) {
  try {
    const users = await getAllUsers();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function getUserByIdHandler(req, res) {
  try {
    const user = await getUserById(req.params.userId);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function deleteAllUsersHandler(req, res) {
  try {
    const rowsDeleted = await deleteAllUsers();
    console.log(rowsDeleted);
    res.status(200).json(rowsDeleted);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

export {
  createUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  deleteAllUsersHandler,
};
