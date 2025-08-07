import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

const dummyHistory = [
  { from: "Home", to: "Airport", date: "Aug 2, 2025", fare: "$25" },
  { from: "Office", to: "Mall", date: "Jul 30, 2025", fare: "$12" },
  { from: "Gym", to: "Cafe", date: "Jul 28, 2025", fare: "$8" },
];

export default function RideHistory() {
  return (
    <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
      <Typography variant="subtitle1" gutterBottom>Recent Rides</Typography>
      <List dense>
        {dummyHistory.map((ride, i) => (
          <ListItem key={i} divider>
            <ListItemText
              primary={`${ride.from} → ${ride.to}`}
              secondary={`${ride.date} • ${ride.fare}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
