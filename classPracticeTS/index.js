"use strict";
/*
 Ejercicio 1: Clases y Métodos
Descripción: Crea una clase Coche que tenga propiedades como marca,
modelo y velocidad. Implementa métodos para acelerar, frenar y mostrar el estado del coche.

Requerimientos:
Define una clase Coche con un constructor.
Implementa métodos acelerar y frenar que modifiquen la velocidad.
Crea un método para mostrar el estado actual del coche.
 */
class Car {
    constructor(brand, model, speed, state) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
        this.state = state;
    }
    speedUp(speed) {
        return speed + 1;
    }
    ;
    breakCar(speed, state) {
        if (state == true && speed > 0) {
            speed = 0;
            console.log("se detuvo el auto");
        }
        else {
            console.log("el auto no esta encendido o no tiene velocidad");
        }
    }
    ;
    turnOnAndOf(state) {
        if (state == true) {
            console.log("se apago el auto");
            return state = false;
        }
        else {
            console.log("se encendio el auto");
            return state = true;
        }
    }
    ;
    showState(state) {
        if (state == true) {
            console.log("el auto esta encendido");
        }
        else {
            console.log("el auto esta apagado");
        }
    }
    ;
}
const car1 = new Car("toyota", "AE86 trueno", 160, true);
console.log("el marca es " + car1.brand);
console.log("el modelo es " + car1.model);
console.log("la velocidad es " + car1.speed);
car1.breakCar(car1.speed, car1.state);
console.log("la velocidad es de " + car1.speed);
console.log(car1.state);
car1.turnOnAndOf(car1.state);
console.log(car1.state);
//ejercicio 2;
/*
Ejercicio 2: Peticiones Asíncronas con Fetch
Descripción: Realiza una petición fetch a una API pública (por ejemplo, jsonplaceholder)
 para obtener una lista de tareas y filtra aquellas que están completadas.
Requerimientos:
Usa fetch para realizar la petición.
Define una interfaz para los datos recibidos.
Filtra las tareas completadas y muéstralas en la consola.

link de api: https://jsonplaceholder.typicode.com/todos
*/
