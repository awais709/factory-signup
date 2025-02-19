// backend/routes/factoryRoutes.js
const express = require("express");
const { createFactory, getAllFactories } = require("../controllers/factoryController");

const router = express.Router();

// API Endpoint for Factory Signup
router.post("", createFactory);

// Endpoint to View All Factories
router.get("", getAllFactories);

module.exports = router;