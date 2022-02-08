function dibujaEscenario() {
    dibujaSueloVerde(pincel);
    decoraCesped();
    dibujaPoste(pincel);                                   // Despues la tengo que sacar
    dibujaYuyos(pincel);                                   // Despues la tengo que sacar
    dibujaSoga();                                          // Despues la tengo que sacar
    dibujaArgolla();                                       // Despues la tengo que sacar
    dibujaCabeza();                                        // Despues la tengo que sacar
    dibujaCuerpo(pincel, 271, 300, 130);                   // Despues la tengo que sacar
    dibujaExtremidad(pincel, 'mano-izquierda', 271, 330);  // Despues la tengo que sacar
    dibujaExtremidad(pincel, 'mano-derecha', 271, 330);    // Despues la tengo que sacar
    dibujaExtremidad(pincel, 'pierna-izquierda', 271, 430);// Despues la tengo que sacar
    dibujaExtremidad(pincel, 'pierna-derecha', 271, 430);  // Despues la tengo que sacar
}

function dibujaSueloVerde(pincel) {
    // pinta con un color
    pincel.fillStyle = '#00FF00';
    // genera un rectangulo a partir de las coordenadas [x, y] y de medidas [w, h]
    pincel.fillRect(0, 372, 880, 220);
}

function dibujaLienaHorizontal(pincel, x, y, largo, grosor, color) {

    pincel.fillStyle = color;
    pincel.beginPath();
    for (let i = x; i < (x+largo); i++) {
        pincel.arc(i, y, grosor, 0, 2*3.14);
        pincel.fill();
    }
}

function decoraCesped() {
    dibujaLienaHorizontal(pincel, 20, 450, 10, 2, '#298A08');
    dibujaLienaHorizontal(pincel, 810, 380, 50, 2, '#298A08');
    dibujaLienaHorizontal(pincel, 700, 385, 20, 2, '#298A08');
    dibujaLienaHorizontal(pincel, 400, 397, 30, 2, '#298A08');
    dibujaLienaHorizontal(pincel, 593, 440, 25, 2, '#298A08');
    dibujaLienaHorizontal(pincel, 286, 480, 10, 2, '#298A08');
    dibujaLienaHorizontal(pincel, 486, 497, 12, 2, '#298A08');
    dibujaLienaHorizontal(pincel, 771, 510, 19, 2, '#298A08');
    dibujaLienaHorizontal(pincel, 579, 564, 25, 2, '#298A08');
    dibujaLienaHorizontal(pincel, 330, 570, 55, 2, '#298A08');
}

function dibujaYuyos(pincel) {
    
    pincel.fillStyle = 'yellow';
    pincel.beginPath();

    pincel.moveTo(60, 570); // 1
    pincel.lineTo(50, 520); // 2
    pincel.lineTo(75, 553); // 3
    pincel.lineTo(87, 530); // 4
    pincel.lineTo(110, 551);// 5
    pincel.lineTo(130, 545);// 6
    pincel.lineTo(145, 555);// 7
    pincel.lineTo(168, 540);// 8
    pincel.lineTo(160, 570);// 9
    
    pincel.fill();
}

function dibujaPoste(pincel) {
    
    pincel.fillStyle = '#61380B';
    pincel.beginPath();

    pincel.moveTo(95, 570); // 1
    pincel.lineTo(95, 100); // 2
    pincel.lineTo(295, 100); // 3
    pincel.lineTo(295, 130); // 4
    pincel.lineTo(125, 130);// 5
    pincel.lineTo(125, 570);// 6
    
    pincel.fill();
}

function dibujaSoga() {
    dibujaLineasParaSoga(pincel, 268, 100, 30);
    dibujaLineasParaSoga(pincel, 274, 100, 30);
    dibujaLineasParaSoga(pincel, 271, 130, 70);
}

function dibujaLineasParaSoga(pincel, x, y, largo) {
    pincel.fillStyle = '#E1F5A9';
    pincel.beginPath();

    for (let i = y; i < (y+largo); i++) {
        pincel.arc(x, i, 2.5, 0, 2*3.14);
        pincel.fill();
    }
}

function dibujaArgolla() {
    dibujaCirculo(pincel, 271, 249, 50, '#E1F5A9');
    dibujaCirculo(pincel, 271, 249, 44, '#81F7F3');
}

function dibujaCirculo(pincel, x, y, radio, color) {
    const pi = 2*3.14;
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, pi);
    pincel.fill();
}

function dibujaCabeza() {
    dibujaCirculo(pincel, 271, 249, 45, '#819FF7');
    dibujaLienaHorizontal(pincel, 246, 250, 12, 1, 'white');
    dibujaLienaHorizontal(pincel, 285, 250, 12, 1, 'white');
    dibujaLienaHorizontal(pincel, 256, 280, 29, 1, 'white');
}

function dibujaCuerpo(pincel, x, y, largo) {
    pincel.fillStyle = '#819FF7';
    pincel.beginPath();

    for (let i = y; i < (y+largo); i++) {
        pincel.arc(x, i, 2.5, 0, 2*3.14);
        pincel.fill();
    }
}

function dibujaExtremidad(pincel, extremidad, x, y){
    if(extremidad == 'mano-derecha'){
        pincel.fillStyle = '#819FF7';
        pincel.beginPath();
        for(let i = x; i > (x-70); i--){
            pincel.arc(i, y, 2.5, 0, 2*3.14);
            pincel.fill();
            y -= .5;
        }
    }

    if(extremidad == 'mano-izquierda'){
        pincel.fillStyle = '#819FF7';
        pincel.beginPath();
        for(let i = x; i < (x+70); i++){
            pincel.arc(i, y, 2.5, 0, 2*3.14);
            pincel.fill();
            y -= .5;
        }
    }

    if(extremidad == 'pierna-derecha'){
        pincel.fillStyle = '#819FF7';
        pincel.beginPath();
        for(let i = x; i > (x-70); i--){
            pincel.arc(i, y, 2.5, 0, 2*3.14);
            pincel.fill();
            y += .5;
        }
    }

    if(extremidad == 'pierna-izquierda'){
        pincel.fillStyle = '#819FF7';
        pincel.beginPath();
        for(let i = x; i < (x+70); i++){
            pincel.arc(i, y, 2.5, 0, 2*3.14);
            pincel.fill();
            y += .5;
        }
    }
}

function capturaPalabra(inputNuevaPalabra) {
    var palabra = inputNuevaPalabra.value.toUpperCase();
    return palabra;
}

// Agrega la palabra ingresada a un div
function agregaPalabra(palabraIngresada) {
    var spanNuevaPalabra = document.createElement('span');
    spanNuevaPalabra.classList.add('letras-pal-sorteada');
    spanNuevaPalabra.textContent = palabraIngresada;
    return spanNuevaPalabra;
}