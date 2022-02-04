// ACA VA LA LOGICA DEL JUEGO
var palabrasSecretasDefault = ['ORACLE', 'ALURA', 'ONE', 'PROGRAMACION', 'WEB', 'INTERNET'];
var inputNuevaPalabra = document.querySelector('#input-nueva-palabra');
var btnAgregaPalabra = document.querySelector('#nueva-palabra');
var nuevoSecreto = document.querySelector('#nuevo-secreto');
nuevoSecreto.textContent =  palabrasSecretasDefault;

// Agrega una nueva palabra a la lista de palabras secretas
btnAgregaPalabra.addEventListener('click', function (event) {
    event.preventDefault();
    if(inputNuevaPalabra.value.length > 0){
        var palabraMayuscula = inputNuevaPalabra.value.toUpperCase();
        palabrasSecretasDefault.push(palabraMayuscula);
        nuevoSecreto.textContent = palabrasSecretasDefault;
    }else{
        palabrasSecretasDefault = ['ORACLE', 'ALURA', 'ONE', 'PROGRAMACION', 'WEB', 'INTERNET'];
        nuevoSecreto.textContent = palabrasSecretasDefault;
    }
});