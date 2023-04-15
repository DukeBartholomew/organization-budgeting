import { hashUserPassword } from "../services/register.services.js";

import { createUser } from "../services/users.services.js";

async function registerHandler(req, res) {
  try {
    req.body.password = await hashUserPassword(req.body.password);
    const newUser = await createUser(req.body);
    console.log(newUser);
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
}

export { registerHandler };
