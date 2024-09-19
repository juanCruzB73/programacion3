import { handleGetProductLocalStorage } from "../persistance/localStorage";
import { handleRenderList } from "../views/store";

export let activeCategory=null;

export const setCategoriaActive=(cateogoryIn)=>{
    activeCategory=cateogoryIn;
}

const handleFilterProductCategory=(categoryIn)=>{
    const products=handleGetProductLocalStorage()

    switch(categoryIn){
        case activeCategory:
            handleRenderList(products)
            break;
        case "allProducts":
            handleRenderList(products)
            break
        case "hamburguesas":
        case "papas":
        case "gaseosas":
            const result=products.filter(e=>e.cateogory==categoryIn)
            handleRenderList(result)
            break
        case "expensive":
            
            const resultExpensive = [...products].sort((a, b) => b.precio - a.precio);
            console.log("Sorted products by expensive:", resultExpensive);
            handleRenderList(resultExpensive);
            break;
        case "cheap":
            const resultCheap = [...products].sort((a, b) => a.precio - b.precio);
            handleRenderList(resultCheap);
            break;
        

    }
}

export const renderCategory = () => {
    const ulList = document.querySelector("#listFilter");

    ulList.innerHTML = `
        <li id="allProducts">Todos los productos</li>
        <li id="hamburguesas">Hamburguesas</li>   
        <li id="papas">Papas</li>
        <li id="gaseosas">gaseosas</li>
        <li id="expensive">mayor precio</li>
        <li id="cheap">menor precio</li> 
    `;
    
    const liElements = ulList.querySelectorAll("li");

    liElements.forEach(e => {
        e.addEventListener('click', () => {
            handClick(e)
        })
    })
    const handClick=(element)=>{
        handleFilterProductCategory(element.id)
        liElements.forEach(el => {
            if(el.classList.contains("liActive")){
                el.classList.remove('liActive');
            }else{
                if(element===el){
                    el.classList.add('liActive');
                }
            }
        });
    }
}