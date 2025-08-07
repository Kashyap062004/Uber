// src/api/rideService.js
import axios from "axios";

const BASE_URL = "http://localhost:5001/api/rides"; // ride-service port

// Get all rides of a user
export const bookRide = async (rideData, token) => {
  const res = await axios.post(`${BASE_URL}/book`, rideData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
export const getUserRides = (id, token) =>
  axios.get(`http://localhost:5001/api/rides/user/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

