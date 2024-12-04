const express = require("express");
const router = express.Router();

// Exemple de route GET
router.get("/binance", (req, res) => {
  res.send("API to binance");
});

module.exports = router;
