import express from "express";

import { loginHandler } from "../controllers/login.controller.js";

const loginRouter = express.Router();

loginRouter.post("/", loginHandler);

export default loginRouter;
