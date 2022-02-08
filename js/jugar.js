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
        spanLetraPalabraSorteada.classList.add('letra-secreta');
        spanLetraPalabraSorteada.textContent = palabra[i];
        divDeletreaPalSorteada.appendChild(spanLetraPalabraSorteada);
    }
    return
});

// PASOS A SEGUIR

/*

3. Comparar la letra elegida con las letras de la palabra sorteada
4. Si la letra elegida esta en la palabra sorteada debe aparecer esa letra en la palabra sorteada
5. Si la letra elegida no esta, se muestra
6. Las letras erroneas no deben mostrarse repetidas

*/