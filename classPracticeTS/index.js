/*
 Ejercicio 1: Clases y Métodos
Descripción: Crea una clase Coche que tenga propiedades como marca,
modelo y velocidad. Implementa métodos para acelerar, frenar y mostrar el estado del coche.

Requerimientos:
Define una clase Coche con un constructor.
Implementa métodos acelerar y frenar que modifiquen la velocidad.
Crea un método para mostrar el estado actual del coche.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var Car = /** @class */ (function () {
    function Car(brand, model, speed, state) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
        this.state = state;
    }
    Car.prototype.speedUp = function (speed) {
        return speed + 1;
    };
    ;
    Car.prototype.breakCar = function (speed, state) {
        if (state == true && speed > 0) {
            speed = 0;
            console.log("se detuvo el auto");
        }
        else {
            console.log("el auto no esta encendido o no tiene velocidad");
        }
    };
    ;
    Car.prototype.turnOnAndOf = function (state) {
        if (state == true) {
            console.log("se apago el auto");
            return state = false;
        }
        else {
            console.log("se encendio el auto");
            return state = true;
        }
    };
    ;
    Car.prototype.showState = function (state) {
        if (state == true) {
            console.log("el auto esta encendido");
        }
        else {
            console.log("el auto esta apagado");
        }
    };
    ;
    return Car;
}());
var car1 = new Car("toyota", "AE86 trueno", 160, true);
console.log("el marca es " + car1.brand);
console.log("el modelo es " + car1.model);
console.log("la velocidad es " + car1.speed);
car1.breakCar(car1.speed, car1.state);
console.log("la velocidad es de " + car1.speed);
console.log(car1.state);
car1.turnOnAndOf(car1.state);
console.log(car1.state);
//ejercicio 2;
var api = "https://jsonplaceholder.typicode.com/todos";
var getFetch = function () { return __awaiter(_this, void 0, void 0, function () {
    var result, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(api)];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, result.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
            case 3:
                error_1 = _a.sent();
                return [2 /*return*/, error_1.message];
            case 4: return [2 /*return*/];
        }
    });
}); };
getFetch().then(function (data) {
    var dataArray = [];
    for (var i = 0; i < 20; i++) {
        dataArray.push(data[i]);
    }
    var dataFiltered = dataArray.filter(function (e) { return e.completed == true; });
    var divEjercicio2 = document.querySelector("#ejercicio2");
    dataFiltered.forEach(function (e) {
        divEjercicio2.innerHTML += "\n\t\t\t<div style=\"border:1px solid black\">\n\t\t\t\t<p><b>tareaNro: </b>".concat(e.id, "</p>\n\t\t\t\t<p><b>title: </b>").concat(e.title, "</p>\n\t\t\t\t<p><b>status: </b>").concat(e.completed, "</p>\n\t\t\t</div>\n\t\t");
    });
}).catch(function (error) { return console.log(error); });
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
document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector(".squareContainer");
    var square = document.querySelector(".square");
    if (!container || !(square instanceof HTMLElement)) {
        console.log("1235");
        return;
    }
    var squareX = 0;
    var squareY = 0;
    var squareSize = 100;
    var containerSize = 500;
    document.addEventListener("keydown", function (e) {
        e.preventDefault();
        switch (e.key) {
            case "ArrowUp":
                console.log("arriba");
                squareY > 0 ? squareY -= 10 : squareY = squareY;
                break;
            case "ArrowRight":
                console.log("left");
                squareX + squareSize < containerSize ? squareX += 10 : squareX = squareX;
                break;
            case "ArrowDown":
                console.log("down");
                //squareY >containerSize ? squareY -= 10: squareY=squareY;
                squareY < containerSize - squareSize ? squareY += 10 : squareY = squareY;
                break;
            case "ArrowLeft":
                console.log("rigth");
                squareX > 0 ? squareX -= 10 : squareX = squareX;
        }
        square.style.top = "".concat(squareY, "px");
        square.style.left = "".concat(squareX, "px");
    });
});
