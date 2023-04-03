const express = require("express");
const app = express();
const port = 8000;

// Enable Cross-Origin Resource Sharing
const cors = require("cors");
app.use(cors()); // This has to be before any routes

// Enable JSON parsing
app.use(express.json());

//imports the routers
const userRouter = require("./routes/users.routes");

//allows app to use the routes on /users route
app.use("/users", userRouter);

//error function
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
