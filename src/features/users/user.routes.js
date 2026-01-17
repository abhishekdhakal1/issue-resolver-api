const express = require("express");
const { createSignUp, handleSignIn } = require("./user.controller");
const userRouter = express.Router();

userRouter.post("/signup", (req, res) => createSignUp(req, res));
userRouter.post("/signin", (req, res) => handleSignIn(req, res));

module.exports = userRouter;
