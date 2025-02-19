const axios = require("axios");

const generateCategory = async (description) => {
  const prompt = `Please suggest the most appropriate category for a factory based on the following description: "${description}". Choose only one from the following options: Apparel, Technology, Sustainable Manufacturing. Provide only the category name as the output.`;
  
  try {
    const response = await axios.post(
      process.env.AI_API_URL,
      {
        model: process.env.AI_MODEL,
        messages: [{ role: "user", content: prompt }],
        max_tokens: 50,
        temperature: 1.5,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.AI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0]?.message?.content || "N/A";
  } catch (error) {
    console.error("Error with AI API:", error.message);
    throw new Error("Category generation failed due to an API error.");
  }
};

module.exports = { generateCategory };
