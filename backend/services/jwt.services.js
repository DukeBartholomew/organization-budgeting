import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const createToken = (username, userId) => {
  const token = jwt.sign({ username, userId }, process.env.JWT_SECRET);
  console.log(token);
  console.log("Created token");
  return token;
};

export { createToken };
