var btnAgregaPalabra = document.querySelector('#nueva-palabra');

// Agrega una nueva palabra a la lista de palabras secretas
btnAgregaPalabra.addEventListener('click', function (event) {
    event.preventDefault();
    var inputNuevaPalabra = document.querySelector('#input-nueva-palabra'); // Esto queda

    // Devuelve la palabra ingresada en mayuscula
    var palabraIngresada = capturaPalabra(inputNuevaPalabra);

    inputNuevaPalabra.value = '';

    // Crea un div con la palabra ingresada
    var nuevaPalabra = agregaPalabra(palabraIngresada);

    // Pone el span con la nueva palabra en el
    var palabrasSecretas = document.querySelector('#palabras-secretas');
    palabrasSecretas.appendChild(nuevaPalabra);    
});