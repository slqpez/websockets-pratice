const express = require("express");
const app = express();
const path = require("path");
const HomeRouter = require("./routes/home.routes.js");
const R1s = require("./routes/r1.routes.js");
const bodyParser = require("body-parser");

app.set("port", process.env.PORT || 4000);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", HomeRouter);
app.use("test", R1s);

module.exports = app;
