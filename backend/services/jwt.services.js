import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const createToken = (username, userId) => {
  const token = jwt.sign(
    { username: username, userId: userId },
    process.env.JWT_SECRET
  ); //double check if that can be shortened
  console.log(token);
  console.log("Created token");
  return token;
};

export { createToken };
