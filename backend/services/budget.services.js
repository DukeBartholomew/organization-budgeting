import { connection } from "../mysql/connect.js";

async function createBudget(budget) {
    const { dateCreated } = budget;
    const query = `
    INSERT INTO budgets 
    (budgetId, orgId, dateCreated) 
    VALUES (?, ?, ?)`;
    try {
      const results = await connection.query(query, [
        dateCreated
      ]);
      return {
        budgetId: results[0].insertId,
        orgId: results[0].insertId,
        dateCreated,
      };
    } catch (error) {
      console.log(error);
    }
  }
  
  async function getAllBudget() {
    const query = `
    SELECT * 
    FROM budgets`;
    const [rows] = await connection.query(query);
    console.log(rows);
    return rows;
  }
  
  async function getBudgetByBudgetId(budgetId) {
    const query = `
      SELECT * 
      FROM budgets
      WHERE budgetId = ?`;
    const [rows] = await connection.query(query, [budgetId]);
    return rows[0];
  }
  
  async function deleteAllBudget() {
    const query = `DELETE FROM budgets`;
    const results = await connection.query(query);
    console.log(results[0].affectedRows);
    return results[0].affectedRows;
  }
  
  export {
    createBudget,
    getAllBudget,
    getBudgetByBudgetId,
    deleteAllBudget
  };
  