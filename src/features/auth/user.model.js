const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: Number, required: true },
  batch: { type: Number },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
