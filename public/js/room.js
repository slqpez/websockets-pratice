const socket = io("/");
const player1 = document.querySelector(".player1");
const youtube = document.querySelector(".youtube");

var countLimiterDecorator = function (fn, times) {
  return function () {
    return times-- > 0 ? fn.apply(this, arguments) : null;
  };
};

showVideo = countLimiterDecorator(addVideoStream, 2);

/* youtube.addEventListener("canplay", () => {
  youtube.srcObject = ds;
}); */

const myPeer = new Peer({
  path: "/",
  secure: true,
  host: "peer-mercapez.herokuapp.com",
  port: 443,
});
const myVideo = document.createElement("video");
myVideo.muted = true;

const peers = {};
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    showVideo(myVideo, stream);

    myPeer.on("call", (call) => {
      call.answer(stream);
      const video = document.createElement("video");
      call.on("stream", (userVideoStream) => {
        showVideo(video, userVideoStream);
      });
    });

    socket.on("user-connected", (userId) => {
      connectToNewUser(userId, stream);
    });
  });

socket.on("user-disconnected", (userId) => {
  if (peers[userId]) peers[userId].close();
});

myPeer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, id);
});

function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream);
  const video = document.createElement("video");

  call.on("stream", (userVideoStream) => {
    showVideo(video, userVideoStream);
  });

  call.on("close", () => {
    video.remove();
  });

  peers[userId] = call;
}

function addVideoStream(video, stream) {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  player1.append(video);
}

socket.on('nuevo mensaje', function (msj) {
  $('#listado-msjs').append($('<p>').text(msj));
});


function enviarMensaje() {
  socket.emit('nuevo mensaje', $('#nuevo-msj').val());
  $('#nuevo-msj').val('');
};
