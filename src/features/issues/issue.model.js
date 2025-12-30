const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  student: { type: mongoose.Schema.Types.ObjectId, required: true },
  status: { type: String, enum: [open, resolved], default: open },
  date: { type: Date },
});

module.exports = mongoose.model("Issue", issueSchema);
