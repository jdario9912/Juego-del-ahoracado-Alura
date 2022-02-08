var btnAgregaPalabra = document.querySelector('#nueva-palabra');

// Agrega una nueva palabra a la lista de palabras secretas
btnAgregaPalabra.addEventListener('click', function (event) {
    event.preventDefault();
    var inputNuevaPalabra = document.querySelector('#input-nueva-palabra'); // Esto queda

    // Devuelve la palabra ingresada en mayuscula
    var palabraIngresada = capturaPalabra(inputNuevaPalabra); // Esto queda

    inputNuevaPalabra.value = '';

    // Crea un div con la palabra ingresada
    var nuevaPalabra = agregaPalabra(palabraIngresada);

    var palabrasSecretas = document.querySelector('#palabras-secretas');    // Esto queda
    palabrasSecretas.appendChild(nuevaPalabra);    
});

// CORRECCION DE LA LOGICA
/*

1. Crear un div de id 'palabras-secretas'
2. Crear un span por cada palabra secreta de clase 'palabra-secreta'
3. Cuando presiono el boton de AGREGAR PALABRA debe generar un nuevo span de clase 'palabra-secreta' con el contenido ingresado
HASTA ACA YA FUNCIONA

4. Cuando presiono INICIAR JUEGO debo crear un objeto con todos los divs de clase 'palabra-secreta' y seleccionar uno aleatoriamente
5. La palabra elegida debe guardarse en un span
6. Deben generarse tantos span como letras tenga la palabra
7. Las letras deben tener el mismo color del fondo y deben cambiar a color negro cuando alguna coincida con la letra elegida

*/