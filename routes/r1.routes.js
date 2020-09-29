const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/test.html", (req, res) => {
  res.sendFile(__dirname + "/public/test.html");
});

module.exports = router;
