const api='https://randomuser.me/api';

const getDatos=(api)=>{
    return new Promise((resolve,reject)=>{
        if(api){
            resolve(fetch(api)) 
        }else{
            reject("error")
        }          
    })
}
getDatos(api).then((result)=>{
        result.json().then(jsonData=>{
            let person=jsonData.results[0];
            let name=person.name.title+" "+person.name.first+" "+person.name.last;
            let gender=person.gender;
            let adress=person.location.city+" "+person.location.state+" "+person.location.country;
            let picture=person.picture.large;
            let personContainer=document.querySelector("#personContainer")
            function writePerson(){
                personContainer.innerHTML+=`<p>${name}</p>`
                personContainer.innerHTML+=`<p>${gender}</p>`
                personContainer.innerHTML+=`<p>${adress}</p>`
                personContainer.innerHTML+=`<img src="${picture}"/>`
            }
            writePerson()         
        }).catch(error=>"error pasando al json o desplegando", error)
    }).catch(error=>"error en la primera promesa")
//EJERCICIO 2
const api1='https://jsonplaceholder.typicode.com/posts';
async function getTitles(api){
    let x=await fetch(api);
    let y=await x.json();
    let titles=[]
    for(let i=0;i<10;i++){
        titles.push(y[i].title)
    }
    function writeTitles(){
        let counter =1;
        titles.forEach(e=>{
            titleContainer.innerHTML+=`title ${counter} <p>${e}</p>`
            counter++
        })
    }
    writeTitles();
}
let titleContainer=document.getElementById("personContainer1")
getTitles(api1);
//EJERCICIO 3
/*
**Mostrar la temperatura actual**
   - **API Endpoint**: https://api.openweathermap.org/data/2.5/weather
   - **Documentación**: https://openweathermap.org/current
   - **Descripción**: OpenWeatherMap ofrece datos meteorológicos actuales, previsiones,
    e históricos mediante su API. En este ejercicio, se consulta el endpoint "/weather"
     para obtener la temperatura y la descripción del clima actual de la ciudad de Mendoza, 
     Argentina. Los resultados se muestran en el contenedor HTML con el id="weatherInfo"
   -**recursos** 
            --apikey : c61e0400e304a834d4159274cfc06146
            
    -**ayudas**
        -parametros a utilizar =  units, lang, 
        -ver como pasar el parametro de pais y region link:https://openweathermap.org/current#name
*/