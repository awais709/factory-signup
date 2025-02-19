import React, { useState } from "react";
import { TextField, Button, Alert, Box, Card, CardContent } from "@mui/material";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import Modal from '@mui/material/Modal';
import axios from "axios";
import useFactories from '../hooks/useFactories'; // Adjust the path as necessary

const FactoryForm = ({ open, onClose, onSuccess }) => {
  const { submitFactory } = useFactories(); // Use the custom hook
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const handleFactorySubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if (!name || !description) {
      setError("Name and description are required.");
      return;
    }

    try {
      setLoader(true);
      const factoryData = { name, description };
      const factory = await submitFactory(factoryData); // Call the hook's function
      setLoader(false);
      setSuccess(`${factory.name} has been successfully categorized as ${factory.category}.`);
      onSuccess(factory);
      setName("");
      setDescription("");
    } catch (err) {
      setLoader(false);
      setError(err.message);
    }
  };

  const handleClose = () => {
    setSuccess("");
    setError("");
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Card sx={{ padding: 3, width: '30%' }}>
          <CardContent>
            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
            <Box component="form" onSubmit={handleFactorySubmit} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Factory Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!error && !name}
                helperText={!name && error ? "Name is required" : ""}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                multiline
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                error={!!error && !description}
                helperText={!description && error ? "Description is required" : ""}
                sx={{ mb: 2 }}
              />
              <Box display="flex" justifyContent="flex-end">
                <Button onClick={handleClose} variant="contained" color="error" style={{ width: '100px', marginRight: '8px' }}>
                  Close
                </Button>
                <Button loading={loader} type="submit" variant="contained" color="primary" style={{ width: '100px' }}>
                  Register
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default FactoryForm;
