const socket = io("/");
const player1 = document.querySelector(".player1");
const youtube = document.querySelector(".youtube");

var countLimiterDecorator = function (fn, times) {
  return function () {
    return times-- > 0 ? fn.apply(this, arguments) : null;
  };
};

showVideo = countLimiterDecorator(addVideoStream, 2);

let videos = [
  "WXFFSPf3V7",
  "7xEU0RZQy34",
  "VVqRqjofAYg",
  "y9jea0RE49E",
  "8Ei0i-E7Emo",
  "0cr-dQuBTRc",
  "KEnO8i3lOuQ",
  "bdFA9A_OxDw",
  "p_UpCAxFOyU",
  "b3008D8_OXc",
];
let max = 9;
let min = 0;
let randomVideo = Math.floor(Math.random() * (max - min) + min);
console.log(videos[randomVideo]);
console.log(randomVideo);
console.log(videos);

//
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: `${videos[randomVideo]}`,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
//

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

socket.on("nuevo mensaje", function (msj) {
  $("#listado-msjs").append($("<p>").text(msj));
});

function enviarMensaje() {
  socket.emit("nuevo mensaje", $("#nuevo-msj").val());
  $("#nuevo-msj").val("");
}
