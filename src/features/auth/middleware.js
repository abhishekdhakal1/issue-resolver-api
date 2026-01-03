const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  // Logic to verify JWT and attach user to req.user
  // For this example, assume req.user is populated via a token
  next();
};

// exports.authorize = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res
//         .status(403)
//         .json({ message: "Not authorized for this action" });
//     }
//     next();
//   };
// };
