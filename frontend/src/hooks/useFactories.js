import { useState, useEffect } from "react";
import axios from "axios";

const useFactories = () => {
  const [factories, setFactories] = useState([]);

  const fetchFactories = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/factory`);
      setFactories(response.data);
    } catch (err) {
      console.error("Error fetching factories:", err);
    }
  };

  const addFactory = (newFactory) => {
    setFactories((prevFactories) => [...prevFactories, newFactory]);
  };

  const submitFactory = async (factoryData) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/factory`, factoryData);
      addFactory(response.data.factory); // Add the new factory to the state
      return response.data.factory;
    } catch (err) {
      console.error("Error creating factory:", err);
      throw new Error("Failed to create factory. Please try again.");
    }
  };

  useEffect(() => {
    fetchFactories();
  }, []);

  return { factories, fetchFactories, addFactory, submitFactory };
};

export default useFactories;