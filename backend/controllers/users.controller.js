const services = require("../services/users.services");

async function createUserHandler(req, res) {
  try {
    const newUser = await services.createUser(req.body);
    console.log(newUser);
    res.status(201).json(JSON.stringify(newUser));
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: {
        error: error.message,
        message: "Error creating user",
      },
    });
  }
}

async function getAllUsersHandler(req, res) {
  try {
    const users = await services.getAllUsers();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: {
        error: error.message,
        message: "Could not get all users",
      },
    });
  }
}

async function getUserByIdHandler(req, res) {
  try {
    const user = await services.getUserById(req.params.userId);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: {
        error: error.message,
        message: "Could not get user by id:" + req.params.usedId,
      },
    });
  }
}

async function deleteAllUsersHandler(req, res) {
  try {
    const rowsDeleted = await services.deleteAllUsers();
    console.log(rowsDeleted);
    res.status(200).json(rowsDeleted);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: {
        error: error.message,
        message: "Could not delete all users",
      },
    });
  }
}

module.exports = {
  createUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  deleteAllUsersHandler,
};
