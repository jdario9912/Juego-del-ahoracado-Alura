// Capta la letra seleccionada
var teclado = document.querySelectorAll('.letra');
var letraSeleccionada = document.querySelector('#letras-seleccionadas')

teclado.forEach(function(tecla) {
    tecla.addEventListener('click', function () {
        letraSeleccionada.textContent = this.textContent;
    });
});