import { compare } from "bcrypt";

async function comparePasswords(text, hash) {
  const match = await compare(text, hash);
  return match;
}

export { comparePasswords };
