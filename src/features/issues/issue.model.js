const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: { type: String, enum: ["open", "resolved"], default: "open" },
    adminComment: { type: String },
    resolvedAt: { type: Date },
  },
  { timestamps: true }
);

const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;
