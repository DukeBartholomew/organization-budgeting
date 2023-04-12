import express from "express";

import { profileHandler } from "../controllers/profile.controller.js";

const profileRouter = express.Router();

profileRouter.post("/", profileHandler);

export default profileRouter;
