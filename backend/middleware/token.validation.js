import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secret = "abcdefghijk"; //change later to .env that is not sent in git

const validateToken = (req, res, next) => {
  try {
    const token = req.body.Headers.jwt;
    console.log(token);
    console.log("token");
    const isValid = jwt.verify(token, process.env.JWT_SECRET);
    console.log("valid");

    console.log(isValid);
    console.log("valid");
    req.verified = isValid;
    return next();
  } catch (error) {
    console.log("No token found");
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

export { validateToken };
