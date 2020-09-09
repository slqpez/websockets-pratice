const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.send("Mercado hp");
});

app.use(express.static("public"));

app.set("views", "/views");
app.set("view engine", "pug");

io.on("connection", (socket) => {
  console.log("user connected");
});

http.listen(3000, () => {
  console.log("Server runing");
});
