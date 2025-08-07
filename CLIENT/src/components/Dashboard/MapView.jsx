import { Box, Paper, Typography } from "@mui/material";
import mapImage from "../../assets/map-placeholder.jpg"; 
export default function MapView() {
  return (
    <Paper elevation={2} sx={{ height: 300, borderRadius: 2, overflow: "hidden" }}>
      <Box
        component="img"
        src={mapImage}
        alt="Map placeholder"
        sx={{ width: "100%", height: "100%", objectFit: "norepeat"  }}
      />
      <Typography
        variant="caption"
        sx={{ position: "absolute", bottom: 8, left: 8, color: "#fff", textShadow: "0 0 4px #000" }}
      >
        Live map loading...
      </Typography>
    </Paper>
  );
}
