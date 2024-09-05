//EJERCICIO1
const api='https://randomuser.me/api';
async function getText(api){
    let x= await fetch(api)
    let y=await x.json();
    let person=y.results[0];

    let name=person.name.title+" "+person.name.first+" "+person.name.last;
    let gender=person.gender;
    let adress=person.location.city+" "+person.location.state+" "+person.location.country;
    let picture=person.picture.large;
    function writePerson(){
        personContainer.innerHTML+=`<p>${name}</p>`
        personContainer.innerHTML+=`<p>${gender}</p>`
        personContainer.innerHTML+=`<p>${adress}</p>`
        personContainer.innerHTML+=`<img src="${picture}"/>`
    }
    writePerson();
}
let personContainer=document.getElementById("personContainer")
getText(api);

//EJERCICIO 2
const api1='https://jsonplaceholder.typicode.com/posts';
async function getTitles(api){
    let x=await fetch(api);
    let y=await x.json();
    let titles=[]
    for(let i=0;i<10;i++){
        titles.push(y[i].title)
    }
    console.log(titles)
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