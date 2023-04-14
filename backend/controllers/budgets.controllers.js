import {
  createBudget,
  getAllBudgets,
  getBudgetById,
  deleteAllBudgets,
} from "../services/budget.services.js";

async function createBudgetHandler(req, res) {
  try {
    const newBudget = await createBudget(req.body);
    console.log(newBudget);
    res.status(201).json(newBudget);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

async function getAllBudgetHandler(req, res) {
  try {
    const budgets = await getAllBudgets();
    console.log(budgets);
    res.status(200).json(budgets);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function getBudgetByBudgetIdHandler(req, res) {
  try {
    const budget = await getBudgetById(req.params.orgId);
    console.log(budget);
    res.status(200).json(budget);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function deleteAllBudgetHandler(req, res) {
  try {
    const rowsDeleted = await deleteAllBudgets();
    console.log(rowsDeleted);
    res.status(200).json(rowsDeleted);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

export {
  createBudgetHandler,
  getAllBudgetHandler,
  getBudgetByBudgetIdHandler,
  deleteAllBudgetHandler,
};
