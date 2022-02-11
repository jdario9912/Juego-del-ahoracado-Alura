// ERRORES DEL CODIGO
/*
    1. CUANDO ELIJO UNA LETRA QUE SE REPITE EN LA PALABRA, NO RECONOCE LA SEGUNDA
    2. SI PRESIONO 'INICIA JUEGO' SE SIGUEN AGREGANDO PALABRAS 
    3. SI VUELVO A ELEJIR UNA LETRA QUE NO COINCIDE, LA VUELVE A MOSTRAR
*/
/**----------------------------------------------------------------------
 * Variables que necesita el codigo para generar el grafico
 */
var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');
/*-------------------------------------------------------------------- */

var letrasPalabra;  //Guarda todas las letras de la palabra sorteada
var inputLetra = document.querySelector('#ingresa-letra'); //Input que se utililza para ingresar una letra
var letraIngresada; //Letra que ingresa el usuario para jugar
var divLetrasIncorrectas = document.querySelector('#letras-incorrectas'); //Caja que agrupa todas las letras incorrectas
var spanLetraIncorrecta; //Guarda todas las letras incorrectas que ingresa el usuario (no se deben repetir)
var letraIncorrecta; //Objeto que guarda todos los span de la clase 'letra-incorrecta'
var letraCorrectaYaElegida;
var letraYaEstaba;
var ganar = 0;
var fin;
var bandera = 0;
var chances = 10; // Chanses que tiene el usuario para errar una letra
var coincidenciaIncorrecta;
var coincidencia;

console.log('Chanses al iniciar juego ' + chances);

inputLetra.addEventListener('input', function (event) {
    event.preventDefault();
    letrasPalabra = document.querySelectorAll('.letra-secreta-invisible');
    letraIngresada = inputLetra.value;
    coincidencia = false;
    letraYaEstaba = false;
    coincidenciaIncorrecta = false;

    if (bandera == 0) {
        fin = letrasPalabra.length;
        console.log('Aciertos necesarios ' + fin);
    }
    
    // Valida solo letras mayusculas
    if (validaCaracteres(letraIngresada)) {
        
        // Verifica si la letra ingresada ya fue elegida y era correcta
        letraCorrectaYaElegida = document.querySelectorAll('.letra-secreta-visible');
        for (let i = 0; i < letraCorrectaYaElegida.length; i++) {
            if (letraIngresada == letraCorrectaYaElegida[i].textContent) {
                coincidencia = true;
                letraYaEstaba = true;
            }            
        }
        
        if (letraYaEstaba) {
            chances --;
            chancesRestantes(chances);
            console.log('Quedan ' + chances + ' chances');
        }

        // Recorre la palabra sorteada
        for (let i = 0; i < letrasPalabra.length; i++) { 

            // Verifica si la letra ingresada existe en la palabra elegida
            if (letraIngresada == letrasPalabra[i].textContent) {
                letrasPalabra[i].classList.remove('letra-secreta-invisible');
                letrasPalabra[i].classList.add('letra-secreta-visible');
                ganar ++;
                console.log('Aciertos ' + ganar);
                coincidencia = true;
            }
        }

        // Si la letra ingresada no coincide selecciona todos los span de clase 'letra-incorrecta'
        if (coincidencia == false) {
            chances --;
            chancesRestantes(chances);
            console.log('Quedan ' + chances + ' chances');
            spanLetraIncorrecta = document.querySelectorAll('.letra-incorrecta');

            // Recorre el objeto con los span de letras incorrectas
            for (let i = 0; i < spanLetraIncorrecta.length; i++) {
                if (letraIngresada == spanLetraIncorrecta[i].textContent) {
                    coincidenciaIncorrecta = true;
                }
                
            }
            if (coincidenciaIncorrecta == false) {
                spanLetraIncorrecta = document.createElement('span');
                spanLetraIncorrecta.classList.add('letra-incorrecta');
                spanLetraIncorrecta.textContent = letraIngresada;
                divLetrasIncorrectas.appendChild(spanLetraIncorrecta);
            }
        }
    }
    inputLetra.value = '';
    if (ganar == fin) {
        console.log('Gano');
        muestraMensaje('Ganaste!');
    }
    if (chances == 0) {
        console.log('Perdio');
        muestraMensaje('Perdiste');
    }

    bandera ++;
});