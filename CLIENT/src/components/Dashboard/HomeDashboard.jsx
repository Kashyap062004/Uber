import { Box, Paper, Typography, Avatar, Button, Divider, Stack,TextField } from "@mui/material";
import mapImage from "../../assets/map-placeholder.jpg";
import { useNavigate } from "react-router-dom";
import { bookRide } from "../../api/rideService";
import { useAuth } from "../../context/useAuth";
import { useState } from "react";

export default function HomeDashboard() {
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [estFare, setEstFare] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

   const calculateFare = async () => {
    // simple distance → fare or call backend: /api/rides/estimate
    const distanceKm =12 /* haversine(pickupCoords, dropoffCoords) */;
    setEstFare((distanceKm * 2).toFixed(2)); // $2/km
  };

  const handleBook = async () => {
    await bookRide({ userId: user._id, pickup, dropoff, fare: estFare }, token);
    // refresh ride history...
  };

  return (
    <Box sx={{ px: 4, py: 3, maxWidth: "1200px", mx: "auto" }}>
      {/* Header */}
      <Typography variant="h4" fontWeight={600} mb={4}>
        Welcome back, John!
      </Typography>

      {/* Top Section: Profile + Recent Rides */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={3} mb={4}>
        {/* Profile */}
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3, flex: 1 }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar sx={{ width: 64, height: 64 }} />
            <Box>
              <Typography variant="h6">John Doe</Typography>
              <Typography variant="body2" color="text.secondary">Rider | Gold Member</Typography>
            </Box>
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Button fullWidth variant="contained" color="primary">Book a Ride</Button>
          <Button fullWidth variant="outlined" sx={{ mt: 1 }}>View History</Button>
          <Button fullWidth variant="outlined" color="error" sx={{ mt: 2 }} onClick={handleLogout}>
            Logout
          </Button>
        </Paper>

        {/* Recent Rides */}
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3, flex: 1 }}>
          <Typography variant="h6" mb={2}>Recent Rides</Typography>
          <Box sx={{ fontSize: 14, color: "text.secondary" }}>
            <Typography>🏠 Home → ✈️ Airport — <b>$25</b> <br /><small>Aug 2, 2025</small></Typography>
            <Divider sx={{ my: 1 }} />
            <Typography>🏢 Office → 🏬 Mall — <b>$12</b> <br /><small>Jul 30, 2025</small></Typography>
            <Divider sx={{ my: 1 }} />
            <Typography>🏋️‍♂️ Gym → ☕ Cafe — <b>$8</b> <br /><small>Jul 28, 2025</small></Typography>
          </Box>
        </Paper>
      </Stack>


      <Stack spacing={2} sx={{ my: 4 }}>
        <TextField label="Pickup Location" value={pickup} onChange={e=>setPickup(e.target.value)} fullWidth />
        <TextField label="Drop-off Location" value={dropoff} onChange={e=>setDropoff(e.target.value)} fullWidth />
        <Button onClick={calculateFare}>Estimate Fare</Button>
        {estFare && (
          <Typography>Estimated Fare: ${estFare}</Typography>
        )}
        <Button variant="contained" onClick={handleBook} disabled={!estFare}>
          Confirm Booking
        </Button>
      </Stack>

      {/* Map View */}
      <Paper elevation={3} sx={{ height: 400, borderRadius: 3, overflow: "hidden", position: "relative" }}>
        <Box
          component="img"
          src={mapImage}
          alt="Map placeholder"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            bottom: 16,
            left: 16,
            color: "#fff",
            bgcolor: "rgba(0,0,0,0.6)",
            px: 1,
            py: 0.5,
            borderRadius: 1,
          }}
        >
          Live map loading...
        </Typography>
      </Paper>
    </Box>
  );
}