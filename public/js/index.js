const socket = io();

io.on("connection", (socket) => {
  console.log("test");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
