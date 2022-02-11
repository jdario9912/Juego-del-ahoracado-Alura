var iniciarJuego = document.querySelector('#iniciar-juego');
var palabraSorteada;
var palabrasSecretas;
var posicionPalabra;
var palabra;
var spanLetraPalabraSorteada;
var divDeletreaPalSorteada;
var inputSuerte;
var father;
var abuelo, padre, hijo, nieto;

iniciarJuego.addEventListener('click', function (event) {
    event.preventDefault();

    hijo = document.querySelectorAll('.letra-secreta-invisible');
    // nieto = document.getElementById('juegoTermino');
    // console.log(nieto.textContent);
    /** ME FALTA REINICIAR EL JUEGO CUANDO, MIENTRAS ESTOY JUGANDO APRETO EL BOTON DE INICIAR JUEGO */

    if (hijo.length > 0) {
        // Estas lineas borran los divs con las letras de la palabra elegida
        abuelo = document.getElementById('deletrea-pal-sorteada');
        padre = document.getElementById('father');
        abuelo.removeChild(padre);
    }
    
    // Selecciono todas las palabras secretas
    palabrasSecretas = document.querySelectorAll('.palabra-secreta');
    posicionPalabra = Math.round(Math.random()*palabrasSecretas.length);
    
    // Elijo una palabra de modo ramdoon
    palabraSorteada = document.querySelector('#palabra-sorteada');
    palabraSorteada.textContent = palabrasSecretas[posicionPalabra].textContent;
    
    // Esta variable contiene la palabra que se va a usar en el juego
    palabra = palabraSorteada.textContent;

    // Selecciono el div donde colocar el div con los span con cada letra de la palabra sorteada
    divDeletreaPalSorteada = document.querySelector('#deletrea-pal-sorteada');

    // Crea el div padre de los span
    father = document.createElement('div');
    father.setAttribute('id', 'father');
    divDeletreaPalSorteada.appendChild(father);
    
    // Este for recorre la palabra elegida
    for (let i = 0; i < palabra.length; i++) {
        spanLetraPalabraSorteada = document.createElement('span');
        spanLetraPalabraSorteada.classList.add('letra-secreta-invisible');
        spanLetraPalabraSorteada.textContent = palabra[i];
        father.appendChild(spanLetraPalabraSorteada);
    }
    
    inputSuerte = document.querySelector('#ingresa-letra');
    inputSuerte.focus();
});

