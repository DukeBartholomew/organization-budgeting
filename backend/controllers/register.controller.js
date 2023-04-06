import { hashUserPassword } from "../services/register.services.js";

import { createUser } from "../services/users.services.js";

async function registerHandler(req, res) {
  try {
    req.body.password = await hashUserPassword(req.body.password);
    const newUser = await createUser(req.body);
    res.status(200).json(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
    res.status(400).json("Unable to register User");
  }
}

export { registerHandler };
