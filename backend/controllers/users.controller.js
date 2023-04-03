const services = require("../services/users.services");

async function createUserHandler(req, res) {
  try {
    services.createUser(req, res);
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
    services.getAllUsers(req, res);
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

async function deleteAllUsersHandler(req, res) {
  try {
    services.deleteAllUsers(req, res);
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
  deleteAllUsersHandler,
};
