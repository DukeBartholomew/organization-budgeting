import { Router } from "express";

import {
  createBudgetHandler,
  getAllBudgetsHandler,
  getBudgetByIdHandler,
  deleteAllBudgetsHandler,
} from "../controllers/budgets.controller.js";

const budgetsRouter = Router();

budgetsRouter.post("/", createBudgetHandler);
budgetsRouter.get("/", getAllBudgetsHandler);
budgetsRouter.get("/:orgId", getBudgetByIdHandler);
budgetsRouter.delete("/clearBudget", deleteAllBudgetsHandler);

export default budgetsRouter;
