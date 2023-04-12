import { createConnection } from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const connection = createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
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
