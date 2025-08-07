// src/components/Dashboard/UserCard.jsx
import React from "react";
import { Paper, Typography, Avatar, Box } from "@mui/material";

const UserCard = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
      <Box display="flex" alignItems="center">
        <Avatar sx={{ width: 64, height: 64, mr: 2 }} src="/user.png" />
        <Box>
          <Typography variant="h6">John Doe</Typography>
          <Typography variant="body2">Rider | Gold Member</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default UserCard;
