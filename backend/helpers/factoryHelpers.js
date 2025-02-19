const fs = require("fs");
const path = require("path");

// Mock Database
const factoriesFilePath = path.join(__dirname, "../data/factories.json");

// Function to read factories from the JSON file
const readFactoriesFromFile = () => {
  try {
    if (fs.existsSync(factoriesFilePath)) {
      const data = fs.readFileSync(factoriesFilePath);
      if(data && data.length > 0)
        return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error("Error with factories.json:", error.message);
    throw new Error("Error while writing factories please check factories.json permissions.");
  }
};

// Function to write factories to the JSON file
const writeFactoriesToFile = (factories) => {
  fs.writeFileSync(factoriesFilePath, JSON.stringify(factories, null, 2));
};

module.exports = { readFactoriesFromFile, writeFactoriesToFile };
