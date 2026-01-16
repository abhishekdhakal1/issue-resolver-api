const express = require("express");
const { createSignUp } = require("./user.controller");
const userRouter = express.Router();

userRouter.post("/signup", (req, res) => createSignUp(req, res));
// userRouter.post("/signin", (req, res) => userController.signIn(req, res));

module.exports = userRouter;
