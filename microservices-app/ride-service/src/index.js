require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const rideRoutes = require("./routes/rideRoutes");

const app = express();
app.use(express.json());
app.use("/api/rides", rideRoutes);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5001, () => console.log("🚗 ride-service on 5001")))
  .catch(console.error);
