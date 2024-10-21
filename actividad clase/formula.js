"use strict";
class Ficha {
    constructor(fecha, peso) {
        this.fecha = fecha;
        this.peso = peso;
    }
    bmi(altura) {
        return parseFloat((this.peso / (altura * altura)).toFixed(2));
    }
}
class Persona {
    constructor(nombre, altura) {
        this.nombre = nombre;
        this.altura = altura;
        this.fichas = [];
    }
    addFicha(fecha, peso) {
        this.fichas.push(new Ficha(fecha, peso));
    }
}
let p1 = new Persona("Juan", 1.75);
p1.addFicha(new Date(), 80);
p1.addFicha(new Date(), 85);
p1.addFicha(new Date(), 65);
function bmi(peso, altura) {
    return parseFloat((peso / (altura * altura)).toFixed(2)); // Calcula el BMI y lo redondea a 2 decimales
}
function constructor(fecha, Date, peso, number) {
    throw new Error("Function not implemented.");
}
