import { hash } from "bcrypt";

async function hashUserPassword(password) {
  return await hash(password, 10);
}

export { hashUserPassword };
