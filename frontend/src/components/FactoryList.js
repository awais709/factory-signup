import React from "react";
import { Grid, Alert } from "@mui/material";
import FactoryCard from "./FactoryCard";

const FactoryList = ({ factories }) => {
  return (
    <Grid container spacing={2}>
      {factories.length === 0 ? (
        <Alert severity="info">No factories registered yet.</Alert>
      ) : (
        factories.map((factory) => (
          <Grid item xs={12} sm={6} md={4} key={factory.id}>
            <FactoryCard factory={factory} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default FactoryList;
