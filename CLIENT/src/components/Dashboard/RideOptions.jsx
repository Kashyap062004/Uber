// src/components/Dashboard/RideOptions.jsx
import React from "react";
import { Paper, Box, Button, Typography } from "@mui/material";

const RideOptions = () => {
  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        Ready to go?
      </Typography>
      <Box display="flex" gap={2}>
        <Button variant="contained" color="primary" size="large">
          Book a Ride
        </Button>
        <Button variant="outlined" color="secondary" size="large">
          View History
        </Button>
      </Box>
    </Paper>
  );
};

export default RideOptions;
