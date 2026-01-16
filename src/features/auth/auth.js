import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import users from "../users/user.model.js"; // Ensure file extension is present if using ESM

export async function register(name, email, password, role) {
  const hashedPassword = await bcrypt.hash(password, 10);
  users.create({ name, email, password: hashedPassword, role });
  return "User Registered!";
}

export async function login(email, password) {
  const user = users.find((u) => u.email === email);
  if (!user) throw new Error("User not found!");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid Credentials");

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return { token, user };
}