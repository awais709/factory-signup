// frontend/src/FactorySignup.js
import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import FactoryForm from "./components/FactoryForm";
import FactoryList from "./components/FactoryList";
import useFactories from "./hooks/useFactories"; // Import the custom hook

function FactorySignup() {
  const { factories, addFactory } = useFactories(); // Use the custom hook
  const [openModal, setOpenModal] = useState(false);

  const handleSuccess = (newFactory) => {
    addFactory(newFactory); // Use addFactory instead of setFactories
  };

  return (
    <Box sx={{ fontFamily: "Arial, sans-serif" }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button
          variant="contained"
          color="info"
          onClick={() => setOpenModal(true)}
          sx={{ padding: 3, position: 'relative', top: 50, fontWeight: 'bold', fontSize: '16px', textTransform: 'none' }}
          startIcon={<AddBusinessIcon />}
        >
          Register Factory
        </Button>
      </Box>

      <FactoryForm open={openModal} onClose={() => setOpenModal(false)} onSuccess={handleSuccess} />

      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2, pb: 1, mt: 5 }}>
        <Typography variant="h4" color="info" fontWeight="bold">
          Registered Factories
        </Typography>
      </Box>

      <FactoryList factories={factories} />
    </Box>
  );
}

export default FactorySignup;