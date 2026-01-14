
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>YouTube Audio Player</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <div class="player">
    <h2>YouTube Audio Player</h2>

    <input
      type="text"
      id="youtubeUrl"
      placeholder="Pega una URL de YouTube"
    />

    <div class="controls">
      <button id="load">Cargar</button>
      <button id="play">▶</button>
      <button id="pause">⏸</button>
      <button id="stop">⏹</button>
    </div>
  </div>

  <!-- Contenedor oculto del player -->
  <div id="yt-player"></div>

  <script src="https://www.youtube.com/iframe_api"></script>
  <script src="app.js"></script>
</body>
</html>
