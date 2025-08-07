const mongoose = require("mongoose");
const RideSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  pickup: String,
  dropoff: String,
  fare: Number,
  status: {
    type: String,
    enum: ["requested","accepted","in_progress","completed","cancelled"],
    default: "requested"
  },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Ride", RideSchema);
