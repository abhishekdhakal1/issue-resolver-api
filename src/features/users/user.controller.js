import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default class UserController {
  async signUp(req, res) {
    try {
      const { name, email, password, role } = req.body;

      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = new UserModel({
        name,
        email,
        password: hashedPassword,
        role,
      });

      await newUser.save();
      res
        .status(201)
        .send({
          message: "User registered successfully",
          user: { name, email, role },
        });
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email }).select("+password");

      if (!user) return res.status(404).send("User not found");

      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect)
        return res.status(401).send("Invalid credentials");

      const token = jwt.sign(
        { userId: user._id, role: user.role },
        "SECRET_KEY_123",
        { expiresIn: "1h" }
      );

      res
        .status(200)
        .send({ message: "Login successful", token, role: user.role });
    } catch (err) {
      res.status(500).send("Internal Server Error");
    }
  }
}
