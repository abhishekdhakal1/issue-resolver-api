const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../users/user.model");

exports.register = async (name, email, password, role) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashedPassword, role });
  return "User Registered!";
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) throw new Error("User not found!");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid Credentials");

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return { token, user };
};
