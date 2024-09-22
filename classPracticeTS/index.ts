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
	constructor(public brand:string,public model:string, public speed:number,public  state:boolean){}
	
	speedUp(speed:number):number{
		return speed+1;
	};


	breakCar(speed: number, state:boolean): void{
		if(state == true && speed>0){
			speed=0;
			console.log("se detuvo el auto");
		}else{
			console.log("el auto no esta encendido o no tiene velocidad");
		}
	};

	turnOnAndOf(state:boolean): boolean {
		if(state==true){         
			console.log("se apago el auto")
		       	return state=false;
                }else{
			
                        console.log("se encendio el auto");
			return state=true;
                
		}
	
	};
	showState(state:boolean): void{
		if(state==true){ 	
			console.log("el auto esta encendido");
		}else{
			console.log("el auto esta apagado");
		}
	};
}

const car1 = new Car("toyota","AE86 trueno",160,true);
console.log("el marca es "+car1.brand);
console.log("el modelo es "+car1.model);
console.log("la velocidad es " +car1.speed);
car1.breakCar(car1.speed,car1.state)
console.log("la velocidad es de "+car1.speed);
console.log(car1.state);
car1.turnOnAndOf(car1.state);
console.log(car1.state);

//ejercicio 2;
const api="https://jsonplaceholder.typicode.com/todos"
const getFetch=async()=>{
	try{
		const result=await fetch(api);
		const data=await result.json();
		return data;
	}catch(error){
		return error.message;
	}
}
getFetch().then(data=>{
	let dataArray=[];
	for(let i=0;i<20;i++){
		dataArray.push(data[i]);
	}
	let dataFiltered=dataArray.filter(e=>e.completed==true);
	let divEjercicio2=document.querySelector("#ejercicio2")!;
	dataFiltered.forEach(e=>{
		divEjercicio2.innerHTML+=`
			<div style="border:1px solid black">
				<p><b>tareaNro: </b>${e.id}</p>
				<p><b>title: </b>${e.title}</p>
				<p><b>status: </b>${e.completed}</p>
			</div>
		`
	})
}).catch(error=>console.log(error))

//ejercicio3
/*
Ejercicio 3: Movimiento de un Cubo dentro de un Contenedor
Descripción: Vamos a crear un cubo que se moverá dentro de 
un contenedor cuando el usuario presione las teclas de flecha
 (arriba, abajo, izquierda, derecha). El cubo deberá mantenerse dentro de los límites del contenedor.

Requerimientos:

1)Crea un contenedor div que actúe como el área de movimiento. 
2)Crea un div más pequeño dentro del contenedor que representará el cubo.
3)Usa TypeScript para manejar los eventos del teclado y mover el cubo dent
ro del contenedor.
    --crea una clase cubo la cual debe tener como propiedad: areaMovimient
oElement, cuboElement, velocidadDeMovimiento 
    --define los metodos: moverArriba, moverAbajo, moverDerecha, moverIzqu
ierda
    --Asegúrate de que el cubo no se salga del contenedor.
4)Instancia tu clase cubo con sus propiedades
5)Define un evento para escuchar las teclas y que se disparen los metodos 
del objetooo


Palabras claves para resolver el ejercicio:
--position: relative
--position: absolute
--top
--left
--clientHeight
--clientWidth
--offsetTop
--offsetLeft
--keydown
*/
document.addEventListener('DOMContentLoaded',()=>{

const container = document.querySelector(".squareContainer");
const square = document.querySelector(".square");

if(!container || !(square instanceof HTMLElement)){
	console.log("1235")
	return;
}

let squareX = 0;
let squareY = 0;
const squareSize = 100;
const containerSize = 500;

document.addEventListener("keydown", (e: KeyboardEvent)=>{
	e.preventDefault()
    switch (e.key) {
        case "ArrowUp":
            console.log("arriba")
            squareY > 0 ? squareY -= 10 : squareY = squareY;
            break;
        case "ArrowRight":
			console.log("left")
            squareX + squareSize < containerSize ? squareX += 10 : squareX = squareX;
            break;
		case "ArrowDown":
			console.log("down")
			//squareY >containerSize ? squareY -= 10: squareY=squareY;
			squareY < containerSize-squareSize?squareY+=10:squareY=squareY;
			break;
		case "ArrowLeft":
			console.log("rigth")
			squareX>0?squareX-=10:squareX=squareX;
	}
	square.style.top = `${squareY}px`;
    square.style.left = `${squareX}px`;
});
})


