const checkbox = document.getElementById('toggleTheme');
const body = document.getElementsByTagName('body');

//Boton modo noche
checkbox.addEventListener('change', function () {
  if(body[0].classList.contains('tema-claro')){
    body[0].classList.replace('tema-claro','tema-oscuro')
  }else{
    body[0].classList.replace('tema-oscuro','tema-claro')
  }
});

//Mostrar ventanas
function mostrarVentanaContactos() {
  document.getElementById("miVentanaContactos").style.display = "block";
}

function mostrarVentanaGmail() {
  document.getElementById("miVentanaGmail").style.display = "block";
}

//Cerrar ventanas
function cerrarVentanaContactos() {
  document.getElementById("miVentanaContactos").style.display = "none";
}

function cerrarVentanaGmail() {
  document.getElementById("miVentanaGmail").style.display = "none";
}

document.getElementById("idContacto").addEventListener("click", mostrarVentanaContactos);
document.getElementById("idGmail").addEventListener("click", mostrarVentanaGmail);

//Mover la pantalla a un punto en concreto
function moverPuntoInicio() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
}

function moverPuntoSobreMi() {
  window.scrollTo({
    top: 510,
    left: 0,
    behavior: 'smooth'
});
}

var inicio = document.getElementById('idInicio');
var sobreMi = document.getElementById('idSobreMi');
inicio.addEventListener('click', moverPuntoInicio);
sobreMi.addEventListener('click', moverPuntoSobreMi);