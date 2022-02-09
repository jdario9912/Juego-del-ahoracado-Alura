// PASOS A SEGUIR

/*
    3. Comparar la letra elegida con las letras de la palabra sorteada
    4. Si la letra elegida esta en la palabra sorteada debe aparecer esa letra en la palabra sorteada
    5. Si la letra elegida no esta, se muestra
    6. Las letras erroneas no deben mostrarse repetidas
*/
var letrasPalabra;
var inputLetra = document.querySelector('#ingresa-letra');
var spanLetraIncorrecta;
var divLetrasIncorrectas = document.querySelector('#letras-incorrectas');
var letErrAceptada;

inputLetra.addEventListener('input', function () {
    letrasPalabra = document.querySelectorAll('.letra-secreta-invisible');
    if (/[A-Z]/g) {
        for (let i = 0; i < letrasPalabra.length; i++) {        
            if (inputLetra.value == letrasPalabra[i].textContent) {
                console.log('Hubo coincidencia');
                letrasPalabra[i].classList.remove('letra-secreta-invisible');
                letrasPalabra[i].classList.add('letra-secreta-visible');
            }else{
                if (/* ME FALTA VALIDAR LAS LETRAS QUE NO COINCIDEN */) {
                    console.log('No hubo coincidencia');
                    spanLetraIncorrecta = document.createElement('span');
                    spanLetraIncorrecta.textContent = inputLetra.value;
                    divLetrasIncorrectas.appendChild(spanLetraIncorrecta);
                    break;
                }
            }
        }
        inputLetra.value = '';
    }
})

// letrasPalabra[0].textContent