const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/public/index.html");
});

module.exports = router;
