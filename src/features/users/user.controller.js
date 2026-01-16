import { register } from "../auth/auth.js";

export const createSignUp = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const message = await register(name, email, password, role);
    
    res.status(201).json({
      status: "success",
      message: message
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};