const express = require("express");
const app = express();
const port = 8000;

// Enable Cross-Origin Resource Sharing
const cors = require("cors");
app.use(cors()); // This has to be before any routes

// Enable JSON parsing
app.use(express.json());

//move this later
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BeOrganized",
  database: "DBUI",
});

connection.connect();

//imports the routers
const userRouter = require("./routes/users.routes");

//allows app to use the routes on /users route
app.use("/users", userRouter);

// API routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.put("/parse", (req, res) => {
  console.log(req.body);

  try {
    const { first, last, age, admin } = req.body;
    const name = `${first} ${last}`;
    const isAdmin = admin ? "is an admin" : "is not an admin";

    res.status(200);
    res.send(`${name} is ${age} years old and ${isAdmin}`);
  } catch (err) {
    console.log(err);
  }
});

app.get("/db", (req, res) => {
  connection.query("SHOW TABLES", (err, rows, fields) => {
    if (err) throw err;

    console.log(rows);
    res.status(200);
    res.send(rows);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
