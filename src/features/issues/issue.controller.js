const Issue = require("./issue.model");

exports.createIssue = async (req, res) => {
  try {
    const issue = await Issue.create({ ...req.body });
    res.status(201).json({ success: true, data: issue });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// exports.showIssue = async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log("Searching for ID:", id); // Check if ID is coming through

//     const issue = await Issue.findById(id); // Temporarily remove .populate
//     console.log("Database Result:", issue); // Check if DB found anything

//     if (!issue) {
//       return res.status(404).json({ success: false, error: "Issue not found" });
//     }

//     res.status(200).json({ success: true, data: issue });
//   } catch (err) {
//     console.error("Error details:", err); // See the actual error message
//     res.status(500).json({ success: false, error: err.message });
//   }
// };

// exports.resolveIssue = async (req, res) => {
//   try {
//     const issue = await Issue.findByIdAndUpdate(
//       req.params.id,
//       {
//         status: "resolved",
//         adminComment: req.body.comment,
//         resolvedAt: Date.now(),
//       },
//       { new: true }
//     );
//     if (!issue) return res.status(404).json({ message: "Not Found" });
//     res.status(200).json({ success: true, data: issue });
//   } catch (err) {
//     res.status(400).json({ success: false, error: err.message });
//   }
// };
