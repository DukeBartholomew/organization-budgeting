import {
  createBudget,
  getAllBudgets,
  getBudgetById,
  getBudgetByName,
  deleteAllBudgets,
  deleteBudget,
  editBudget,
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

async function getAllBudgetsHandler(req, res) {
  try {
    const budgets = await getAllBudgets();
    console.log(budgets);
    res.status(200).json(budgets);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function getBudgetByIdHandler(req, res) {
  try {
    const budget = await getBudgetById(req.params.budgetId);
    console.log(budget);
    res.status(200).json(budget);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function getBudgetByNameHandler(req, res) {
  try {
    const budget = await getBudgetByName(req.params.orgName);
    console.log(budget);
    res.status(200).json(budget);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function deleteAllBudgetsHandler(req, res) {
  try {
    const rowsDeleted = await deleteAllBudgets();
    console.log(rowsDeleted);
    res.status(200).json(rowsDeleted);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function deleteBudgetHandler(req, res) {
  try {
    const results = await deleteBudget(req.params.orgName);
    console.log(results);
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}
async function editBudgetHandler(req, res) {
  try {
    const rowsUpdated = await editBudget(
      req.params.orgName,
      req.body.budgetAmount
    );
    console.log(rowsUpdated);
    res.status(200).json(rowsUpdated);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}
export {
  createBudgetHandler,
  getAllBudgetsHandler,
  getBudgetByIdHandler,
  getBudgetByNameHandler,
  deleteAllBudgetsHandler,
  deleteBudgetHandler,
  editBudgetHandler,
};
