const app = require("./app.js");

const http = require("http").createServer(app);

const io = require("socket.io")(http);

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId, video) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", userId);
    socket.to(roomId).broadcast.emit("youtube", video);
    socket.on("disconnect", () => {
      socket.to(roomId).broadcast.emit("user-disconnected", userId);
    });
  });
});

http.listen(app.get("port"), () => {
  console.log(`Server runing on http://localhost:${app.get("port")}`);
});
