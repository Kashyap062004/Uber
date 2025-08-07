import React, { useEffect, useState } from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";
import { getUserRides } from "../api/rideService";

const RecentRides = ({ userId, token }) => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const data = await getUserRides(userId, token);
        setRides(data.rides); // or data depending on your backend format
      } catch (error) {
        console.error(error);
      }
    };

    if (userId && token) fetchRides();
  }, [userId, token]);

  return (
    <Box p={2}>
      <Typography variant="h6" gutterBottom>
        Recent Rides
      </Typography>
      <List>
        {rides.map((ride) => (
          <React.Fragment key={ride._id}>
            <ListItem>
              <ListItemText
                primary={`From: ${ride.pickupLocation} → ${ride.dropLocation}`}
                secondary={`Status: ${ride.status} | ₹${ride.fare} | ${new Date(ride.createdAt).toLocaleString()}`}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default RecentRides;
