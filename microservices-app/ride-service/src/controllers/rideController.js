const Ride = require("../models/Ride");

// POST /api/rides/book
exports.bookRide = async (req, res) => {
  const { pickup, dropoff, fare } = req.body;
  const userId = req.user.userId;

  try {
    const ride = await Ride.create({ userId, pickup, dropoff, fare });
    res.status(201).json({ ride });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};



// GET /api/rides/user/:id
exports.getUserRides = async (req, res) => {
  try {
    const rides = await Ride.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json({ rides });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch rides" });
  }
};
