const express = require("express");
const router = express.Router();
const axios = require("axios");

// Exemple de route GET
router.get("/example", async (req, res) => {
  try {
    const response = await axios.get("https://api.example.com/data");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error whith the request");
  }
});

module.exports = router;
