const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/room1.html", (req, res) => {
  res.sendFile(__dirname + "/public/room1.html");
});

router.get("/room2.html", (req, res) => {
  res.sendFile(__dirname + "/public/room2.html");
});

module.exports = router;
