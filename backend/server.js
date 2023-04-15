import express from "express";
import cors from "cors";

//imports the routers
import usersRouter from "./routes/users.routes.js";
import registerRouter from "./routes/register.routes.js";
import loginRouter from "./routes/login.routes.js";
import profileRouter from "./routes/profile.routes.js";
import budgetsRouter from "./routes/budgets.routes.js";
import organizationsRouter from "./routes/organizations.routes.js";
//imports the middlewares
import { validateToken } from "./middleware/token.validation.js";

const app = express();
const port = 8000;

// Enable Cross-Origin Resource Sharing
app.use(cors()); // This has to be before any routes

// Enable JSON parsing
app.use(express.json());

app.use("/users", usersRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/profile", validateToken, profileRouter);
app.use("/budgets", budgetsRouter);
app.use("/organizations", organizationsRouter);
//error function
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
