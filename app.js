const express = require("express");
const app = express();
const path = require("path");
const HomeRouter = require("./routes/home.routes.js");

app.set("port", process.env.PORT || 4000);

app.use(express.static(path.join(__dirname, "public")));
app.use(HomeRouter);

module.exports = app;
