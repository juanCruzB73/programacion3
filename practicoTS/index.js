//EJERCICIO 2
console.log("corriendo desde typescript");
//EJERCICIO 3
var num = 1;
var str = 'hello';
var bool = true;
var date = new Date(2023, 5, 14, 12, 30, 0);
var div3 = document.querySelector('.ejercicio3');
var h2Number = document.createElement('h2');
h2Number.innerText = "Number: ".concat(num);
var h2String = document.createElement('h2');
h2String.innerText = "String: ".concat(str);
var h2Boolean = document.createElement('h2');
h2Boolean.innerText = "Boolean: ".concat(bool);
var h2Date = document.createElement('h2');
h2Date.innerText = "Date: ".concat(date);
div3.append(h2Number);
div3.append(h2String);
div3.append(h2Boolean);
div3.append(h2Date);
//EJERCICIO4
var fnc = function (num) {
    return String(num);
};
var fncStr = fnc(21);
var h2Fnc = document.createElement('h2');
h2Fnc.innerText = "number converted to string: ".concat(fncStr);
var div4 = document.querySelector('.ejercicio4');
div4.append(h2Fnc);
//EJERCICIO5
var arrayNumber = [1, 2, 3, 4, 5];
var sumArrayNumbers = function (array) {
    var result = 0;
    array.forEach(function (num) {
        result += num;
    });
    return result;
};
var div5 = document.querySelector('.ejercicio5');
var result = sumArrayNumbers(arrayNumber);
var h2ArraySum = document.createElement('h2');
h2ArraySum.innerText = "the sum of the numbers of the array is: ".concat(result);
div5.append(h2ArraySum);
//EJERCICIO6
var object = { name: 'Malboro', age: 21, curse: 'comision3' };
var div6 = document.querySelector('.ejercicio6');
var h2AObject = document.createElement('h2');
h2AObject.innerText = "el nombre en el objeto es: ".concat(object.name, " - la edad en el objeto es: ").concat(object.age, " - el curso en el objeto es: ").concat(object.curse);
div6.append(h2AObject);
var adress1 = { street: 'beaker street', city: 'londres', postalCde: 1234 };
var div7 = document.querySelector('.ejercicio7');
var h2Type = document.createElement('h2');
h2Type.innerText = "la calle es: ".concat(adress1.street, " - la ciudad es: ").concat(adress1.city, " - el codigo pstal es: ").concat(adress1.postalCde);
div7.append(h2Type);
;
var user1;
var h2Interface = document.createElement('h2');
user1 = { name: 'elliot', email: 'sam.sepiol@gmail.com', greet: function () { return "hello ".concat(user1.name); } };
h2Interface.innerText = "nombre: ".concat(user1.name, " - email: ").concat(user1.email, " - saludo: ").concat(user1.greet());
var div8 = document.querySelector('.ejercicio8');
div8.append(h2Interface);
//ejercicio 9
/*
Crea una clase `Persona` con propiedades para nombre y edad.
Implementa un método para presentarse y muestra el resultado en el HTML.
La clase debe tener un constructor para inicializar nombre y edad, y un método
que devuelva una cadena con la presentación.
*/
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.present = function (div, h2) {
        h2.innerText = "nombre: ".concat(this.name, " edad:").concat(this.age);
        div.append(h2);
    };
    return Person;
}());
var div9 = document.querySelector('.ejercicio9');
var h2Class = document.createElement('h2');
var person1 = new Person('juan', 21);
person1.present(div9, h2Class);
var div10 = document.querySelector('.ejercicio10');
var h2ClassGenericString = document.createElement('h2');
var h2ClassGenericNumber = document.createElement('h2');
var box = /** @class */ (function () {
    function box(generic) {
        this.generic = generic;
    }
    box.prototype.showElement = function (div, h2) {
        var type = typeof this.generic;
        h2.innerText = "".concat(type, ": ").concat(this.generic);
        div.append(h2);
    };
    return box;
}());
var box1 = new box('esto es un string');
var box2 = new box(1234);
box1.showElement(div10, h2ClassGenericString);
box2.showElement(div10, h2ClassGenericNumber);
//EJERCICIO11
function identidad(valor) {
    return valor;
}
var div11 = document.querySelector('.ejercicio11');
var num1 = identidad(42);
var text = identidad("hola");
var obj = identidad({ name: "Juan", age: 30 });
div10.insertAdjacentHTML('beforeend', "\n    <h2>Resultado con n\u00FAmero: ".concat(num1, "</h2>\n    <h2>Resultado con texto: ").concat(text, "</h2>\n    <h2>Resultado con objeto: ").concat(JSON.stringify(obj), "</h2>\n"));
//EJERCICIO12
/*
12. Define una enumeración `Color` con valores
 para diferentes colores. Usa esta enumeración
 para asignar un color favorito a una variable y
  muéstralo en el HTML. La enumeración debe incluir
   al menos tres colores diferentes.
–Requisitos:
Genera un enum con tre colores
Asigna a una variable el enu
*/
var Color;
(function (Color) {
    Color["Blue"] = "blue";
    Color["Grey"] = "grey";
    Color["Red"] = "red";
})(Color || (Color = {}));
;
var color1 = Color.Blue;
var color2 = Color.Grey;
var color3 = Color.Red;
var div12 = document.querySelector('.ejercicio12');
div12.insertAdjacentHTML('beforeend', "\n    <h2>color 1 es: ".concat(color1, "</h2>\n    <h2 style=\"color: ").concat(color1, ";\">Este texto est\u00E1 en color ").concat(color1, "</h2>\n    <h2>color 2 es: ").concat(color2, "</h2>\n    <h2 style=\"color: ").concat(color2, ";\">Este texto est\u00E1 en color ").concat(color2, "</h2>\n    <h2>color 3 es: ").concat(color3, "</h2>\n    <h2 style=\"color: ").concat(color3, ";\">Este texto est\u00E1 en color ").concat(color3, "</h2>\n"));
