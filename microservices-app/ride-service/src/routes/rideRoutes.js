const router = require("express").Router();
const { bookRide, getUserRides } = require("../controllers/rideController");
const auth = require("../middlewares/authMiddleware"); // reuse from auth-service

router.post("/book", auth, bookRide);
router.get("/my", auth, getUserRides);

module.exports = router;
