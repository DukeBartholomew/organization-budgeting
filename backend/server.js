import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

//imports the routers
import userRouter from "./routes/users.routes.js";
import registerRouter from "./routes/register.routes.js";
import loginRouter from "./routes/login.routes.js";
import profileRouter from "./routes/profile.routes.js";

//imports the middlewares
import { validateToken } from "./middleware/token.validation.js";

const app = express();
const port = 8000;

// Enable Cross-Origin Resource Sharing
app.use(cors()); // This has to be before any routes

// Enable JSON parsing
app.use(express.json());

//enables cookie parsing
app.use(cookieParser());

app.use("/users", userRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/profile", validateToken, profileRouter);

//error function
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
