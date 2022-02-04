// ACA VA EL CODIGO QUE CREA LA GRAFICA

// conecta JS con la etiqueta canvas
var pantalla = document.querySelector('canvas');   
// el pincel solo dibuja en 2d: X, Y
var pincel = pantalla.getContext('2d');

dibujaEscenario();