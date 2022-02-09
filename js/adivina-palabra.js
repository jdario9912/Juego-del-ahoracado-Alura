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

inputLetra.addEventListener('input', function () {
    letrasPalabra = document.querySelectorAll('.letra-secreta-invisible');

    console.log(
        letrasPalabra[0],
        inputLetra.value
    );
    if (inputLetra.value == letrasPalabra[0].textContent) {
        console.log('Si entro en el if');
        letrasPalabra[0].classList.remove('letra-secreta-invisible');
        letrasPalabra[0].classList.add('letra-secreta-visible');
    }else{
        console.log('No entro en el if');
        spanLetraIncorrecta = document.createElement('span');
        // spanLetraIncorrecta.classList.add('letra-secreta-invisible');
        spanLetraIncorrecta.textContent = inputLetra.value;
        divLetrasIncorrectas.appendChild(spanLetraIncorrecta);
    }

    inputLetra.value = '';
})

// letrasPalabra[0].textContent