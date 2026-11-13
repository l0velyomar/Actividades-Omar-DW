// 1. Lista de canciones con su nombre y archivo
const playlist = [
  { nombre: "1.Ipod Touch - Ninajirachi", archivo: "Ninajirachi - Ipod Touch.mp3" },
  { nombre: "2.Freak it - Kim petras", archivo: "Kim Petras - Freak it.mp3" },
  { nombre: "3.pink diamond - Charli xcx", archivo: "Charli XCX - pink diamond.mp3" }
];


let indiceActual = 0;


// 2. Conectamos con los elementos del HTML
const audioPlayer = document.getElementById("audio-player");
const nombreCancion = document.getElementById("nombre-cancion");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");


// 3. Función para cargar y reproducir la canción elegida
function cargarCancion(indice) {
  nombreCancion.textContent = playlist[indice].nombre;
  audioPlayer.src = playlist[indice].archivo;
  audioPlayer.play();
}


// 4. Botón Siguiente (si llega al final, vuelve a la primera)
btnSiguiente.addEventListener("click", () => {
  indiceActual = (indiceActual + 1) % playlist.length;
  cargarCancion(indiceActual);
});


// 5. Botón Anterior (si está en la primera, va a la última)
btnAnterior.addEventListener("click", () => {
  indiceActual = (indiceActual - 1 + playlist.length) % playlist.length;
  cargarCancion(indiceActual);
});


// 6. Si la canción termina sola, pasa automáticamente a la siguiente
audioPlayer.addEventListener("ended", () => {
  indiceActual = (indiceActual + 1) % playlist.length;
  cargarCancion(indiceActual);
});