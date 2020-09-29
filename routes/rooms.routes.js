const express = require("express");
const router = express.Router();

router.get("/room1.html", (req, res) => {
  res.sendFile(__dirname + "/public/room1.html");
});

router.get("/room2.html", (req, res) => {
  res.sendFile(__dirname + "/public/room2.html");
});

router.get("/room3.html", (req, res) => {
  res.sendFile(__dirname + "/public/room3.html");
});

router.get("/room4.html", (req, res) => {
  res.sendFile(__dirname + "/public/room4.html");
});
router.get("/room5.html", (req, res) => {
  res.sendFile(__dirname + "/public/room5.html");
});

router.get("/room6.html", (req, res) => {
  res.sendFile(__dirname + "/public/room6.html");
});

router.get("/room7.html", (req, res) => {
  res.sendFile(__dirname + "/public/room7.html");
});

router.get("/room8.html", (req, res) => {
  res.sendFile(__dirname + "/public/room8.html");
});

router.get("/room9.html", (req, res) => {
  res.sendFile(__dirname + "/public/room9.html");
});

router.get("/room10.html", (req, res) => {
  res.sendFile(__dirname + "/public/room10.html");
});

router.get("/room11.html", (req, res) => {
  res.sendFile(__dirname + "/public/room11.html");
});

router.get("/room12.html", (req, res) => {
  res.sendFile(__dirname + "/public/room12.html");
});

module.exports = router;
