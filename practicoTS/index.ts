//EJERCICIO 2
console.log("corriendo desde typescript");
//EJERCICIO 3
let num:number=1;
let str:string='hello';
let bool:boolean=true;
let date:Date=new Date(2023, 5, 14, 12, 30, 0);

let div3=document.querySelector('.ejercicio3')!;
let h2Number=document.createElement('h2');
h2Number.innerText=`Number: ${num}`
let h2String=document.createElement('h2');
h2String.innerText=`String: ${str}`
let h2Boolean=document.createElement('h2');
h2Boolean.innerText=`Boolean: ${bool}`
let h2Date=document.createElement('h2');
h2Date.innerText=`Date: ${date}`

div3.append(h2Number);
div3.append(h2String);
div3.append(h2Boolean);
div3.append(h2Date);

//EJERCICIO4

let fnc=(num:number):string=>{
    return String(num);
}
let fncStr=fnc(21);
let h2Fnc=document.createElement('h2');
h2Fnc.innerText=`number converted to string: ${fncStr}`
let div4=document.querySelector('.ejercicio4')!;
div4.append(h2Fnc);

//EJERCICIO5
let arrayNumber: number[]=[1,2,3,4,5];

let sumArrayNumbers=(array:number[]):number=>{
    let result:number=0;
    array.forEach(num=>{
        result+=num;
    })
    return result;
}
let div5=document.querySelector('.ejercicio5')!;
let result=sumArrayNumbers(arrayNumber);
let h2ArraySum=document.createElement('h2')
h2ArraySum.innerText=`the sum of the numbers of the array is: ${result}`
div5.append(h2ArraySum)

//EJERCICIO6
let object={name:'Malboro',age:21,curse:'comision3'};
let div6=document.querySelector('.ejercicio6')!;
let h2AObject=document.createElement('h2');
h2AObject.innerText=`el nombre en el objeto es: ${object.name} - la edad en el objeto es: ${object.age} - el curso en el objeto es: ${object.curse}`;
div6.append(h2AObject);

//EJERCICIO 7
type Adress={street:string;city:string,postalCde:number};
let adress1:Adress={street:'beaker street',city:'londres',postalCde:1234};
let div7=document.querySelector('.ejercicio7')!;
let h2Type=document.createElement('h2');
h2Type.innerText=`la calle es: ${adress1.street} - la ciudad es: ${adress1.city} - el codigo pstal es: ${adress1.postalCde}`;
div7.append(h2Type);

//EJERCICIO 8
interface User{name:string,email:string,greet:()=>string};
let user1:User;
let h2Interface=document.createElement('h2');
user1={name:'elliot',email:'sam.sepiol@gmail.com', greet:()=>{return`hello ${user1.name}`}};
h2Interface.innerText=`nombre: ${user1.name} - email: ${user1.email} - saludo: ${user1.greet()}`;
let div8=document.querySelector('.ejercicio8')!;
div8.append(h2Interface);

//ejercicio 9
/*
Crea una clase `Persona` con propiedades para nombre y edad.
Implementa un método para presentarse y muestra el resultado en el HTML.
La clase debe tener un constructor para inicializar nombre y edad, y un método
que devuelva una cadena con la presentación.
*/
class Person{
    constructor(private name:string, private age:number,){}
    present(div:HTMLDivElement,h2:HTMLHeadingElement){
        h2.innerText=`nombre: ${this.name} edad:${this.age}`
        div.append(h2)
    }
}
let div9=document.querySelector('.ejercicio9') as HTMLDivElement;
let h2Class=document.createElement('h2');
let person1=new Person('juan',21);
person1.present(div9,h2Class);

let div10=document.querySelector('.ejercicio10') as HTMLDivElement;
let h2ClassGenericString=document.createElement('h2');
let h2ClassGenericNumber=document.createElement('h2');
class box<T>{
    constructor(private generic:T){}
    showElement(div:HTMLDivElement,h2:HTMLHeadingElement){
        let type=typeof this.generic;
        h2.innerText=`${type}: ${this.generic}`;
        div.append(h2);
    }
}
let box1=new box('esto es un string')
let box2=new box(1234);
box1.showElement(div10,h2ClassGenericString);
box2.showElement(div10,h2ClassGenericNumber);

//EJERCICIO11
function identidad<T>(valor: T): T {
    return valor;
}
let div11=document.querySelector('.ejercicio11') as HTMLDivElement;

const num1 = identidad(42);
const text = identidad("hola");
const obj = identidad({ name: "Juan", age: 30 });

div10.insertAdjacentHTML('beforeend',`
    <h2>Resultado con número: ${num1}</h2>
    <h2>Resultado con texto: ${text}</h2>
    <h2>Resultado con objeto: ${JSON.stringify(obj)}</h2>
`)
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
enum Color{Blue="blue",Grey="grey",Red="red"};

const color1:Color=Color.Blue;
const color2:Color=Color.Grey;
const color3:Color=Color.Red;

let div12=document.querySelector('.ejercicio12') as HTMLDivElement;

div12.insertAdjacentHTML('beforeend',`
    <h2>color 1 es: ${color1}</h2>
    <h2 style="color: ${color1};">Este texto está en color ${color1}</h2>
    <h2>color 2 es: ${color2}</h2>
    <h2 style="color: ${color2};">Este texto está en color ${color2}</h2>
    <h2>color 3 es: ${color3}</h2>
    <h2 style="color: ${color3};">Este texto está en color ${color3}</h2>
`)