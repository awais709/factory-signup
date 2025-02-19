import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import FactorySignup from "./FactorySignup";
import FactoryIcon from "@mui/icons-material/Factory";
import HowToRegIcon from "@mui/icons-material/HowToReg";
function App() {
  return (
    <Box sx={{ padding: 3, fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <AppBar
      position="static"
      sx={{
        background: "white", // Green gradient
        paddingY: 1.5,
        boxShadow: 3, // Slight shadow for depth
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <HowToRegIcon sx={{ fontSize: 40, color: "black", mr: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "black", textAlign: "center" }}>
          <Box component="span" sx={{ color: "green" }}>AI-Assisted</Box> Factory Signup
        </Typography>
      </Toolbar>
    </AppBar>
      {/* Navbar End */}
      <FactorySignup />
    </Box>
  );
}

export default App;
