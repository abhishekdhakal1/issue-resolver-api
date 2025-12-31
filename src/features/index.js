const router = require('./issue.routes');
const Issue = require('./issue.model');
const { createIssue, resolveIssue } = require('./issue.controller');

module.exports = {
  router,
  Issue,
  createIssue,
  resolveIssue,
};