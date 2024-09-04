'ejercicio2'
let a=5;
let b=10;
let c=a+b;
console.log("el resultado de a+b es "+c)
'ejercicio 3'
let name=prompt('ingrese su nombre:')
console.log("hola mi nombre es "+name)
'operadores logicos y condicionales'
'ejercicio 1'
let numA=30;
let numB=20;
if(numA>numB){
  console.log("el numero "+numA+" es el mayor")
}else{
  console.log("el numero "+numB+" es el mayor")
}
'ejercicio 2'
'funcion para verificar que lo ingresado en promp es un numero y entero'
function isNumber(a){
    let aNum=Number(a)
    if (isNaN(aNum)|| !Number.isInteger(aNum)) {
      console.log("El valor ingresado no es un número o no es entero");
      return false;
    }else{
      return true;
    }
}
let numPoI=prompt('ingrese numero y dire si es par o inpar')
if(isNumber(numPoI)){
  numPoI=Number(numPoI)
  isOdd(numPoI);
}
'asignacion y bucles'
'ejercicio 1'
let numWhile=10;
while (numWhile>0){
  console.log(numWhile);
  numWhile--;
}
'ejercicio 2'
let numDoWhile;
do{
  numDoWhile=prompt("ingrese un numero mayor a 100");
  isNumber(numDoWhile) ? numDoWhile=Number(numDoWhile) : numDoWhile=0;
  console.log(numDoWhile)
}while(numDoWhile<100);
console.log("ingresaste un numero mayor a 100: "+numDoWhile)
'funciones'
'ejercicio1'
'funcion para saber si un numero es par o no'
function isOdd(a){
  if(a%2==0){
    console.log("el numero "+a+" es par")
  }else{
    console.log("el numero "+a+" es inpar")
  }
}
isOdd(7);
isOdd(20);
'ejercicio 2'
'funcion que convierte de celsius a fahrenheit'
function celsiusToFahrenheit(celcius){
  let fahrenheit=celcius*1.8+32;
  return fahrenheit;
}
let temperatureCelcius=10;
let fahrenheit=celsiusToFahrenheit(temperatureCelcius);
console.log(temperatureCelcius+" celcius in fahrenheit is "+fahrenheit);
'objetos js'
'ejercicio 1'
let persona={nombre:"Joe", edad:29, ciudad:"New York",
  changeCity: function(city){
    this.ciudad=city;
  }

}
console.log(persona);
persona.changeCity("Los Angeles");
console.log(persona);
'ejercicio2'
let libro={
  tittle:"Frankestein",
  author:"Mary Shelly",
  date:1818,
  isOld:function(){
    let currentDate=new Date();
    let year=currentDate.getFullYear();
    if(year-currentDate<=10){
      console.log("el libro es viejo")
    }else{
      console.log("el libro no es viejo")
    }
  }
}
libro.isOld();
'Arrays'
'ejericio1'
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multipliedNumbers=[]
numeros.forEach(e=>multipliedNumbers.push(e*2))
console.log("numeros normales "+numeros);
console.log("numeros multiplicados "+multipliedNumbers);
'ejercicio 2'
let odds=[]
for(let i=0;i<=20;i++){
  if(i%2==0){
    odds.push(i)
  }
}
console.log("los numeros pares son "+odds)
'intruduccion al DOM'
'ejercicio 1'
let parrafos = document.querySelectorAll('p');
  
  // Recorre cada párrafo y cambia el color
let changeColor= ()=>{parrafos.forEach((p)=> {
      p.style.color="blue"
})}
let button1=document.getElementById("button1");
button1.addEventListener('click',changeColor)
function cambiarColor() {
  // Selecciona todos los elementos <p>
  
}
'ejercicio2'
let button2=document.getElementById("button2")
let showAlert= ()=>{
  let value=document.getElementById('texto').value;
  alert("el valor ingresado es "+value)
}
button2.addEventListener('click',showAlert)
'eventos con dom'
let list=document.getElementById("elementList")
let value2=""
let addElement=()=>{
  value2=document.getElementById("texto2").value;
  let li=document.createElement("li")
  li.textContent= value2;
  list.appendChild(li);
}
let listElements=document.querySelectorAll("#elementList li");
listElements.forEach(li=>{
  li.addEventListener('click',()=>{
    console.log(li.textContent)
  })
})
let button3=document.getElementById("button3");
button3.addEventListener('click',addElement);
'ejercicio2'
const campoTexto = document.getElementById('campoTexto');
const btnDeshabilitar = document.getElementById('btnDeshabilitar');
const btnHabilitar = document.getElementById('btnHabilitar');

btnDeshabilitar.addEventListener('click', function() {
  campoTexto.disabled = true;
});

btnHabilitar.addEventListener('click', function() {
  campoTexto.disabled = false;
});

let formulario=document.getElementById("localStorageForm")
let correo=document.getElementById("localStroage").value;
let GuardarCorreo=document.getElementById("saveEmail");
let correoGuardado=document.getElementById("savedEmail");
let borrarCorreo=document.getElementById("ereaseEmail");

let storageEmail= ()=>{
  let storageEmail=localStorage.getItem("email");
  if(storageEmail){
    correoGuardado.innerHTML=`${storageEmail}`
  }
}
storageEmail();

GuardarCorreo.addEventListener("click",(event)=>{
  event.preventDefault();
  correo=document.getElementById("localStroage").value;
  localStorage.setItem("email",correo);
  storageEmail();
})
borrarCorreo.addEventListener("click",()=>{
  localStorage.removeItem("email");
  correoGuardado.innerHTML= '';
  correo=document.getElementById("localStroage").value;
})
