const express = require("express");
const router = express.Router();
const { v4: uuidV4 } = require("uuid");

router.get("/:room", (req, res) => {
  res.render("room1", { roomId: req.params.room });
});

module.exports = router;
