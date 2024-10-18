console.log("Hola mundo, no");
var nombre = "María";
var contenido = document.getElementById("contenido");
var fila = document.createElement("span");
fila.innerHTML = "nuevoElemento: ".concat(nombre);
contenido.appendChild(fila);
function bmi(peso, altura) {
    return parseFloat((peso / (altura * altura)).toFixed(2)); // Calcula el BMI y lo redondea a 2 decimales
}
