import { Router } from "express";

import {
  createBudgetHandler,
  getAllBudgetsHandler,
  getBudgetByIdHandler,
  getBudgetByNameHandler,
  deleteAllBudgetsHandler,
  deleteBudgetHandler,
  editBudgetHandler,
} from "../controllers/budgets.controller.js";

const budgetsRouter = Router();

budgetsRouter.post("/", createBudgetHandler);
budgetsRouter.get("/", getAllBudgetsHandler);
budgetsRouter.get("/name/:orgName", getBudgetByNameHandler);
budgetsRouter.get("/:budgetId", getBudgetByIdHandler);
budgetsRouter.delete("/clearBudget", deleteAllBudgetsHandler);
budgetsRouter.delete("/:orgName", deleteBudgetHandler);
budgetsRouter.put("/:orgName", editBudgetHandler);

export default budgetsRouter;
