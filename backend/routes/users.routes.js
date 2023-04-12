import { Router } from "express";

import {
  createUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  deleteAllUsersHandler,
} from "../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.post("/", createUserHandler);
usersRouter.get("/", getAllUsersHandler);
usersRouter.get("/:userId", getUserByIdHandler);
usersRouter.delete("/clear", deleteAllUsersHandler);

export default usersRouter;
