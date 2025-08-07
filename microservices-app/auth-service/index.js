const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const verifyToken = require("./src/middlewares/verifyToken"); // adjust path if needed
const router = express.Router();
const authRoutes = require("./src/routes/authroute");
const cors=require('cors')
app.use(cors({
  origin: 'http://localhost:5173',  // your frontend's origin
  credentials: true                 // if you're using cookies or auth headers
}));

app.use(express.json());

app.use(express.json());

app.use("/", authRoutes);
// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));


// Register route
app.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ message: "User registration route hit!" });
});

router.get("/protected", verifyToken, (req, res) => {
    res.json({ message: "You have accessed a protected route!", user: req.user });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
