
let player;
let videoId = null;

// Extrae el ID desde distintas URLs de YouTube
function extractVideoId(url) {
  const regExp =
    /(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '1',
    width: '1',
    videoId: '',
    playerVars: {
      controls: 0,
      modestbranding: 1
    }
  });
}

// Botones
document.getElementById('load').onclick = () => {
  const url = document.getElementById('youtubeUrl').value;
  const id = extractVideoId(url);

  if (!id) {
    alert('URL no válida');
    return;
  }

  videoId = id;
  player.loadVideoById(videoId);
};

document.getElementById('play').onclick = () => {
  player.playVideo();
};

document.getElementById('pause').onclick = () => {
  player.pauseVideo();
};

document.getElementById('stop').onclick = () => {
  player.stopVideo();
};
