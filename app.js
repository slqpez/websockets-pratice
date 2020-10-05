const express = require("express");
const app = express();
const path = require("path");
const HomeRouter = require("./routes/home.routes.js");
const Rooms = require("./routes/rooms.routes.js");

app.set("port", process.env.PORT || 4000);

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use("/", HomeRouter);
app.use(Rooms);

module.exports = app;
