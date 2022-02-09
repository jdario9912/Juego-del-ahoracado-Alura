// ERRORES DEL CODIGO
/*
    1. CUANDO ELIJO UNA LETRA QUE SE REPITE EN LA PALABRA, NO RECONOCE LA SEGUNDA
    2. SI PRESIONO 'INICIA JUEGO' SE SIGUEN AGREGANDO PALABRAS 
    3. SI VUELVO A ELEJIR UNA LETRA QUE NO COINCIDE, LA VUELVE A MOSTRAR
*/


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
var letraIngresada;
var chanses = 9;
var perdiste = false; 

var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');

inputLetra.addEventListener('input', function (event) {
    event.preventDefault();
    letrasPalabra = document.querySelectorAll('.letra-secreta-invisible');

    letraIngresada = inputLetra.value;

    if (validaCaracteres(letraIngresada)) {
        for (let i = 0; i < letrasPalabra.length; i++) { 
            console.log(i);       
            if (letraIngresada == letrasPalabra[i].textContent) {
                console.log('Hubo coincidencia');
                letrasPalabra[i].classList.remove('letra-secreta-invisible');
                letrasPalabra[i].classList.add('letra-secreta-visible');
                break;
            }else{
                console.log('Entro en el else');
                if(i == letrasPalabra.length-1){
                    chanses --;
                    switch (chanses) {
                        case 9:
                            dibujaYuyos(pincel);
                            break;
                        case 8:
                            dibujaPoste(pincel);
                            dibujaYuyos(pincel);
                            break;
                        case 7:
                            dibujaPoste(pincel);
                            dibujaYuyos(pincel);
                            dibujaSoga();
                            break;
                        case 6:
                            dibujaPoste(pincel);
                            dibujaYuyos(pincel);
                            dibujaSoga();       
                            dibujaArgolla();
                            break;
                        case 5:
                            dibujaPoste(pincel);
                            dibujaYuyos(pincel);
                            dibujaSoga();       
                            dibujaArgolla();    
                            dibujaCabeza();
                            break;
                        case 4:
                            dibujaPoste(pincel);
                            dibujaYuyos(pincel);
                            dibujaSoga();       
                            dibujaArgolla();    
                            dibujaCabeza();     
                            dibujaCuerpo(pincel, 271, 300, 130);
                            break;
                        case 3:
                            dibujaPoste(pincel);                                   
                            dibujaYuyos(pincel);                                   
                            dibujaSoga();                                          
                            dibujaArgolla();                                       
                            dibujaCabeza();                                        
                            dibujaCuerpo(pincel, 271, 300, 130);                   
                            dibujaExtremidad(pincel, 'mano-izquierda', 271, 330);
                            break;
                        case 2:
                            dibujaPoste(pincel);                                   
                            dibujaYuyos(pincel);                                   
                            dibujaSoga();                                          
                            dibujaArgolla();                                       
                            dibujaCabeza();                                        
                            dibujaCuerpo(pincel, 271, 300, 130);                   
                            dibujaExtremidad(pincel, 'mano-izquierda', 271, 330);  
                            dibujaExtremidad(pincel, 'mano-derecha', 271, 330);
                            break;
                        case 1:
                            dibujaPoste(pincel);                                   
                            dibujaYuyos(pincel);                                   
                            dibujaSoga();                                          
                            dibujaArgolla();                                       
                            dibujaCabeza();                                        
                            dibujaCuerpo(pincel, 271, 300, 130);                   
                            dibujaExtremidad(pincel, 'mano-izquierda', 271, 330);  
                            dibujaExtremidad(pincel, 'mano-derecha', 271, 330);    
                            dibujaExtremidad(pincel, 'pierna-izquierda', 271, 430);
                            break;
                        case 0:
                            dibujaPoste(pincel);                                   
                            dibujaYuyos(pincel);                                   
                            dibujaSoga();                                          
                            dibujaArgolla();                                       
                            dibujaCabeza();                                        
                            dibujaCuerpo(pincel, 271, 300, 130);                   
                            dibujaExtremidad(pincel, 'pierna-izquierda', 271, 430);
                            dibujaExtremidad(pincel, 'mano-izquierda', 271, 330);  
                            dibujaExtremidad(pincel, 'mano-derecha', 271, 330);    
                            dibujaExtremidad(pincel, 'pierna-derecha', 271, 430);
                            perdiste = true;
                            return;
                        default:
                            break;
                    }
                    if (perdiste) {
                        alert('Fin del juego');
                    }
                    console.log('No hubo coincidencia');
                    spanLetraIncorrecta = document.createElement('span');
                    spanLetraIncorrecta.textContent = letraIngresada;
                    divLetrasIncorrectas.appendChild(spanLetraIncorrecta);
                    // break;
                }
            }
        }
    }
    inputLetra.value = '';
    
    if (letrasPalabra.length == 1) {
        alert('Ganaste, Felicidades!');
        // location.reload();
    }
});
