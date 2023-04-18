import { Router } from "express";

import {
  createBudgetHandler,
  getAllBudgetsHandler,
  getBudgetByIdHandler,
  getBudgetByNameHandler,
  deleteAllBudgetsHandler,
} from "../controllers/budgets.controller.js";

const budgetsRouter = Router();

budgetsRouter.post("/", createBudgetHandler);
budgetsRouter.get("/", getAllBudgetsHandler);
budgetsRouter.get("/name/:orgName", getBudgetByNameHandler);
budgetsRouter.get("/:budgetId", getBudgetByIdHandler);

budgetsRouter.delete("/clearBudget", deleteAllBudgetsHandler);

export default budgetsRouter;
