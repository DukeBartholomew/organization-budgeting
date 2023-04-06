import express from "express";

import { registerHandler } from "../controllers/register.controller.js";

const registerRouter = express.Router();

registerRouter.post("/", registerHandler);

export default registerRouter;
