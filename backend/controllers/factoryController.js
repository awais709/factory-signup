// backend/controllers/factoryController.js
const { generateCategory } = require("../libraries/aiLibrary");
const { readFactoriesFromFile, writeFactoriesToFile } = require("../helpers/factoryHelpers");

// Create Factory
const createFactory = async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: "Both name and description must be provided." });
  }

  try {
    // Call the GPT library to get the category
    const category = await generateCategory(description);

    // Save Factory Details in Mock Database
    const factories = readFactoriesFromFile();
    const newFactory = {
      id: factories.length + 1,
      name,
      description,
      category,
    };
    
    factories.push(newFactory);
    writeFactoriesToFile(factories);

    res.status(201).json({
      message: "Factory has been created successfully!",
      factory: newFactory,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Factories
const getAllFactories = (req, res) => {
  const factories = readFactoriesFromFile();
  res.json(factories);
};

module.exports = { createFactory, getAllFactories };