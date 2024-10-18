

class Ficha {
    private fecha: Date;
    private peso: number;

    constructor (fecha: Date, peso: number){
        this.fecha = fecha;
        this.peso = peso;
    }

    public bmi(altura: number): number {
        return parseFloat((this.peso / (altura * altura)).toFixed(2)); 
    }
    
}

class Persona{
    private nombre: string;
    private altura: number;
    private fichas: Ficha[];

    constructor (nombre: string, altura: number){
        this.nombre = nombre;
        this.altura = altura;
        this.fichas = [];
    }

    public addFicha(fecha: Date, peso: number): void{
        this.fichas.push(new Ficha(fecha, peso))
    }

}


let p1 = new Persona("Juan", 1.75);
p1.addFicha(new Date(), 80);
p1.addFicha(new Date(), 85);
p1.addFicha(new Date(), 65);



function bmi(peso: number, altura: number): number {
    return parseFloat((peso / (altura * altura)).toFixed(2)); // Calcula el BMI y lo redondea a 2 decimales
}

function constructor(fecha: any, Date: DateConstructor, peso: any, number: any) {
    throw new Error("Function not implemented.");
}
