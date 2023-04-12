import { createToken } from "../services/jwt.services.js";
import { comparePasswords } from "../services/login.services.js";

import { getUserByUsername } from "../services/users.services.js";

async function loginHandler(req, res) {
  try {
    const { username, password } = req.body;
    const { userId, password: hash } = await getUserByUsername(username);
    const match = await comparePasswords(password, hash);
    if (!match) {
      return res.status(401).json(match);
    }
    const token = createToken(username, userId);
    console.log(`Created token:
    ${token}`);
    res
      .cookie("jwtToken", token, {
        maxAge: 30 * 24 * 60 * 60 * 1000, //in milliseconds
        httpOnly: true,
      })
      .status(200)
      .json({
        username,
        token,
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
}

export { loginHandler };
