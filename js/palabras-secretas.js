// Contiene la lista de palabras secretas por defecto y la funcion de agregar una nueva palabra secreta

var palabrasSecretasDefault = ['ORACLE', 'ALURA', 'ONE', 'PROGRAMACION', 'WEB', 'INTERNET', 'TECLADO', 'WWW'];
var inputNuevaPalabra = document.querySelector('#input-nueva-palabra');
var btnAgregaPalabra = document.querySelector('#nueva-palabra');
var palabrasSecretas = document.querySelector('#palabras-secretas');
palabrasSecretas.textContent =  palabrasSecretasDefault;

// Agrega una nueva palabra a la lista de palabras secretas
btnAgregaPalabra.addEventListener('click', function (event) {
    event.preventDefault();
    if(inputNuevaPalabra.value.length > 0){
        var palabraMayuscula = inputNuevaPalabra.value.toUpperCase();
        palabrasSecretasDefault.push(palabraMayuscula);
        palabrasSecretas.textContent = palabrasSecretasDefault;
        inputNuevaPalabra.value = '';
    }else{
        palabrasSecretasDefault = ['ORACLE', 'ALURA', 'ONE', 'PROGRAMACION', 'WEB', 'INTERNET'];
        palabrasSecretas.textContent = palabrasSecretasDefault;
    }
});

// CORRECCION DE LA LOGICA
/*

1. Crear un div de id 'palabras-secretas'
2. Crear un span por cada palabra secreta de clase 'palabra-secreta'
3. Cuando presiono el boton de AGREGAR PALABRA debe generar un nuevo span de clase 'palabra-secreta' con el contenido ingresado
4. Cuando presiono INICIAR JUEGO debo crear un objeto con todos los divs de clase 'palabra-secreta' y seleccionar uno aleatoriamente
5. La palabra elegida debe guardarse en un span
6. Deben generarse tantos span como letras tenga la palabra
7. Las letras deben tener el mismo color del fondo y deben cambiar a color negro cuando alguna coincida con la letra elegida

*/