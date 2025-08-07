import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AnimatedBox from '../components/AnimatedBox';
import RecentRides from "../components/RecentRides";
import { AuthContext } from "../context/AuthContext";
import React, { useContext } from 'react';

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const { user, token } = useContext(AuthContext);

  if (!user || !token) {
    // Optionally redirect or show a loading/error message
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container sx={{ mt: 8 }}>
      <AnimatedBox>
        <Typography variant="h3" fontWeight="bold">Welcome to the Dashboard!</Typography>
        <Typography mt={2}>You are now logged in.</Typography>
        {/* Only pass user._id if user exists */}
        <RecentRides userId={user?._id} token={token} />
        <Button variant="outlined" onClick={logout} sx={{ mt: 3 }}>
          Logout
        </Button>
      </AnimatedBox>
    </Container>
  );
}