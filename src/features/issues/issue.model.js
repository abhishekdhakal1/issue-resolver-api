const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    issueTitle: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: [
        "Facilities",
        "Safety",
        "Technology",
        "Classroom",
        "Maintenance",
        "Other",
      ],
    },
    location: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Issue = mongoose.model("Issue", issueSchema);
module.exports = Issue;
