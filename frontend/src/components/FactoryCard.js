import React from "react";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";

const FactoryCard = ({ factory }) => {
  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: 2,
        border: 'solid 1px grey',
        transition: "0.3s",
        "&:hover": { boxShadow: 5 },
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Typography variant="body1">
          <strong>Name:</strong> {factory.name}
          </Typography>
        </Box>
        <Divider sx={{ mb: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body1">
          <strong>Description:</strong> {factory.description}
          </Typography>
        </Box>
        <Divider sx={{ mb: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
          <Typography variant="body1">
          <strong>Category:</strong> {factory.category}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FactoryCard;
