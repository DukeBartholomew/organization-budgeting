import { connection } from "../mysql/connect.js";

async function createBudget(budget) {
  try {
    const { orgName, budgetAmount } = budget;
    const query = `
    INSERT INTO budgets 
    (orgName, budgetAmount) 
    VALUES (?, ?)`;
    const results = await connection.query(query, [orgName, budgetAmount]);
    return {
      orgName,
      budgetId: results[0].budgetId,
      budgetAmount,
      dateCreated: results[0].dateCreated,
    };
  } catch (error) {
    console.log(error);
  }
}

async function getAllBudgets() {
  const query = `
    SELECT * 
    FROM budgets`;
  const [rows] = await connection.query(query);
  return rows;
}

async function getBudgetById(budgetId) {
  const query = `
      SELECT * 
      FROM budgets
      WHERE budgetId = ?`;
  const [rows] = await connection.query(query, [budgetId]);
  return rows[0];
}

async function getBudgetByName(orgName) {
  const query = `
      SELECT * 
      FROM budgets
      WHERE orgName = ?`;
  const [rows] = await connection.query(query, [orgName]);
  return rows[0];
}

async function deleteAllBudgets() {
  const query = `DELETE FROM budgets`;
  const results = await connection.query(query);
  return results[0].affectedRows;
}

export {
  createBudget,
  getAllBudgets,
  getBudgetById,
  getBudgetByName,
  deleteAllBudgets,
};
