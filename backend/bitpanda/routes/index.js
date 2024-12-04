const express = require("express");
const router = express.Router();

// Exemple de route GET
router.get("/bitpanda", (req, res) => {
  res.send("API to bitpanda");
});

module.exports = router;
