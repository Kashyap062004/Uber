const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const jwt = require("jsonwebtoken");
// These must be functions!
router.post("/register", registerUser);
router.post("/login", loginUser);
const authMiddleware = require("../middlewares/authMiddleware");
const verifyToken = require("../middlewares/verifyToken");
// router.get("/protected", authMiddleware, (req, res) => {
//   res.status(200).json({ message: `Hello User ${req.user.userId}, this is a protected route.` });
// });

router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "This is protected data!", user: req.user });
});

module.exports = router;
