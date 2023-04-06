import { displayProfile } from "../services/profile.services.js";

async function profileHandler(req, res) {
  try {
    res.json(await displayProfile());
  } catch (error) {
    console.log(error);
    res.status(400).json("Cannot access Profile");
  }
}

export { profileHandler };
