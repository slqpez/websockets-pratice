const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Mercado hp");
});

module.exports = router;
