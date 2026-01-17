const { register, login } = require("../auth/auth");

exports.createSignUp = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const message = await register(name, email, password, role);

    res.status(201).json({
      status: "success",
      message: message,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.handleSignIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await login(email, password);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
