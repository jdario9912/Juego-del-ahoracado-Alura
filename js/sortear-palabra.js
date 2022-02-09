// ACA VA LA LOGICA DEL JUEGO
var iniciarJuego = document.querySelector('#iniciar-juego');

iniciarJuego.addEventListener('click', function (event) {
    event.preventDefault();
    // Selecciono todas las palabras secretas
    var palabrasSecretas = document.querySelectorAll('.palabra-secreta');
    var posicionPalabra = Math.round(Math.random()*palabrasSecretas.length);

    // Elijo una palabra de modo ramdoon
    var palabraSorteada = document.querySelector('#palabra-sorteada');
    palabraSorteada.textContent = palabrasSecretas[posicionPalabra].textContent;

    // Esta variable contiene la palabra que se va a usar en el juego
    var palabra = palabraSorteada.textContent;

    // Guarda cada letra en un span
    var spanLetraPalabraSorteada;

    // Selecciono el div donde colocar los span con cada letra de la palabra sorteada
    var divDeletreaPalSorteada = document.querySelector('#deletrea-pal-sorteada');

    // Este for recorre la palabra elegida
    for (let i = 0; i < palabra.length; i++) {
        spanLetraPalabraSorteada = document.createElement('span');
        spanLetraPalabraSorteada.classList.add('letra-secreta-invisible');
        spanLetraPalabraSorteada.textContent = palabra[i];
        divDeletreaPalSorteada.appendChild(spanLetraPalabraSorteada);
    }
    var inputSuerte = document.querySelector('#ingresa-letra');
    inputSuerte.focus();
    return
});