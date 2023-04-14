import { connection } from "../mysql/connect.js";

async function createBudget(budget) {
  try {
    const { orgId, budgetAmount } = budget;
    const query = `
    INSERT INTO budgets 
    (orgId, budgetAmount) 
    VALUES (?, ?)`;
    console.log("results");

    const results = await connection.query(query, [orgId, budgetAmount]);
    console.log(results);

    return {
      orgId,
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
  console.log(rows);
  return rows;
}

async function getBudgetById(orgId) {
  const query = `
      SELECT * 
      FROM budgets
      WHERE orgId = ?`;
  const [rows] = await connection.query(query, [orgId]);
  return rows[0];
}

async function deleteAllBudgets() {
  const query = `DELETE FROM budgets`;
  const results = await connection.query(query);
  console.log(results[0].affectedRows);
  return results[0].affectedRows;
}

export { createBudget, getAllBudgets, getBudgetById, deleteAllBudgets };
