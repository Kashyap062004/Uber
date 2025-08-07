import React, { useState } from 'react';
import { Container, Typography, Button, Paper } from '@mui/material';
import LocationSearchInput from '../components/LocationSearchInput';
import { bookRide } from '../api/rideService';
import { useAuth } from '../context/AuthContext'; // Auth context to access token/user info

export default function BookRide() {
  const [pickup, setPickup] = useState(null);
  const [dropoff, setDropoff] = useState(null);
  const { token, user } = useAuth();

  const handleBook = async () => {
    if (!pickup || !dropoff) {
      alert('Please select both pickup and dropoff locations');
      return;
    }

    const rideData = {
      userId: user._id,
      pickup: pickup.display_name,
      dropoff: dropoff.display_name,
      fare: 25,
      status: 'requested',
    };

    try {
      await bookRide(rideData, token);
      alert('Ride booked!');
    } catch (err) {
      console.error('Booking failed:', err);
      alert('Booking failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h5" gutterBottom>
          Book a Ride
        </Typography>

        <LocationSearchInput
          label="Pickup Location"
          onSelect={(location) => setPickup(location)}
        />
        <LocationSearchInput
          label="Dropoff Location"
          onSelect={(location) => setDropoff(location)}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={handleBook}
          disabled={!pickup || !dropoff}
        >
          Confirm Ride
        </Button>
      </Paper>
    </Container>
  );
}
