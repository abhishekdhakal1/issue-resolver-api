const Issue = require("./issue.model");

exports.createIssue = async (req, res) => {
  try {
    const issue = await Issue.create({ ...req.body });
    res.status(201).json({ success: true, data: issue });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.filterIssueByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const issue = await Issue.find({ category });

    if (!issue) {
      return res.status(404).json({ success: false, error: "Issue not found" });
    }

    res.status(200).json({ success: true, data: issue });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.showAllIssue = async (req, res) => {
  try {
    const issue = await Issue.find();

    if (!issue) {
      return res.status(404).json({ success: false, error: "Issue not found" });
    }

    res.status(200).json({ success: true, data: issue });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
