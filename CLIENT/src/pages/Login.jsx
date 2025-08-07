import { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Stack, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login as loginApi } from '../api/auth';
import AnimatedBox from '../components/AnimatedBox';
import { useAuth } from '../context/useAuth';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginApi(form);
      if (!data.token || !data.user) {
        alert("Login failed: missing token or user");
        return;
      }
      login(data.token, data.user);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <AnimatedBox component={Paper} elevation={6} p={4}>
        <Typography variant="h4" mb={2} fontWeight="bold">Login</Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Email"
              fullWidth
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <Button type="submit" variant="contained" fullWidth size="large">
              Sign In
            </Button>
            <Button onClick={() => navigate('/register')} size="small">
              Don’t have an account? Register
            </Button>
          </Stack>
        </form>
      </AnimatedBox>
    </Container>
  );
}