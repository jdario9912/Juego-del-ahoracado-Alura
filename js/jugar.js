var palabrasSecretas = document.querySelector('#palabras-secretas');
var iniciarJuego = document.querySelector('#iniciar-juego');

iniciarJuego.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(palabrasSecretas[2]);
})