import { Router } from "express";

import {
    createBudgetHandler,
    getAllBudgetHandler,
    getBudgetByBudgetIdHandler,
    deleteAllBudgetHandler,
} from "../controllers/budgets.controllers.js";

const budgetsRouter = Router();

budgetsRouter.post("/", createBudgetHandler);
budgetsRouter.get("/", getAllBudgetHandler);
budgetsRouter.get("/:budgetId", getBudgetByBudgetIdHandler);
budgetsRouter.delete("/clearBudget", deleteAllBudgetHandler);

export default budgetsRouter;
