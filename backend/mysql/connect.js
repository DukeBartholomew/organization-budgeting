import { createConnection } from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'BeOrganized',
  database: 'DBUI'
}).promise();

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to DB in /services/users.service/");
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to DB in /services/bu.service/");
});
export { connection };
