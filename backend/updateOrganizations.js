const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'root',
    password: 'BeOrganized',
    database: 'DBUI',
    port: 8000,
});

// Define the filter to select the row(s) to update
const filter = {
  orgName: 'MyOrg'
};

// Prompt the user for new values to update the table
prompt('Enter new total budget: ')
  .then((totalBudget) => {
    prompt('Enter new budget date (YYYY-MM-DD): ')
      .then((budgetDate) => {
        // Validate the user input
        if (!totalBudget || isNaN(totalBudget) || !budgetDate || !/^\d{4}-\d{2}-\d{2}$/.test(budgetDate)) {
          console.error('Invalid input. Please enter a valid total budget and budget date.');
          pool.end();
          return;
        }

        // Define the query and parameters to be executed
        const query = 'UPDATE organizations SET totalBudget = $1, budgetDate = $2 WHERE orgName = $3';
        const values = [parseFloat(totalBudget), budgetDate, filter.orgName];

        // Execute the query with the user input
        pool.query(query, values)
          .then((res) => {
            console.log(`Successfully updated ${res.rowCount} row(s).`);
            pool.end();
          })
          .catch((err) => {
            console.error(err);
            pool.end();
          });
      })
      .catch((err) => {
        console.error(err);
        pool.end();
      });
  })
  .catch((err) => {
    console.error(err);
    pool.end();
  });