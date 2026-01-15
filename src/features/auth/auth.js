require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = require("../users/user.model");

async function register(name, email, password, role) {
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ name, email, password: hashedPassword, role });
  return "User Registered!";
}

async function login(email, password) {
  const user = users.find((u) => u.email === email);
  if (!user) throw new Error("User not found!");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid Credintals");

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
}

module.exports = { register, login };
