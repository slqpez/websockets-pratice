const app = require("./app.js");

const http = require("http").createServer(app);

const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("socket test");
});

http.listen(app.get("port"), () => {
  console.log(`Server runing on http://localhost:${app.get("port")}`);
});
