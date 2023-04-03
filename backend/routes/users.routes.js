//imports express
const express = require("express");

//stores the routes handlers in handlers
const usersController = require("../controllers/users.controller");

const usersRouter = express.Router();

usersRouter.post("/", usersController.createUserHandler);
usersRouter.get("/", usersController.getAllUsersHandler);
usersRouter.get("/:userId", usersController.getUserByIdHandler);
usersRouter.delete("/clear", usersController.deleteAllUsersHandler);

module.exports = usersRouter;
