const app = require("./app.js");

const http = require("http").createServer(app);

const io = require("socket.io")(http);

io.on("connection", (socket) => {
<<<<<<< HEAD
  socket.on("join-room", (roomId, userId, video) => {
=======

  socket.on('nuevo mensaje', function(msj) {
    io.emit('nuevo mensaje', msj);
  });

  socket.on("join-room", (roomId, userId) => {
>>>>>>> 01413f2740dddef311f803d48a2e2811d5af9d6e
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
