import { handleGetProductLocalStorage } from "../persistance/localStorage.js"
import { openModal } from "../services/modal.js";


//active products
export let activeProduct=null;
export const setProductActive=(productIn)=>{
    activeProduct=productIn;
}

//
export const handleGetProductsStore=()=>{
    const products =  handleGetProductLocalStorage();
    handleRenderList(products);
}
export const handleRenderList=(productosIn)=>{
    
    const burgers=productosIn.filter((e)=>e.cateogory==="hamburguesas")
    const fries=productosIn.filter((e)=>e.cateogory==="papas")
    const soda=productosIn.filter((e)=>e.cateogory==="gaseosas")
    
    const renderProductGroup=(products,title)=>{
        if(products.length>0){
            const productsHTML = products.map((product,index)=>{
                return `
                  <div class="containerTargetItem" id='product-${product.cateogory}-${index}'>
                    <div class="imageContainer"><img src='${product.img}'/></div>
                    <div> <h2>${product.name}</h2></div> 
                    <div> <p><b>Precio: </b>${product.precio}</p></div>  
                  </div>  
                `
            })
            return `
                <section class="sectionStore">
                    <div class="titleContainer"><h3>${title}</h3></div>
                    <div class="containerProductStore">${productsHTML.join("")}</div>
                </section>
            `
        }else{
            return ''
        }
    };
    const appContainer=document.querySelector("#storeContainer");
    appContainer.innerHTML=`
        ${renderProductGroup(burgers,"Hamburgesas")}
        ${renderProductGroup(fries,"Papas")}
        ${renderProductGroup(soda,"Gaseosas")}
    `
    const addEvent=(productsIn)=>{
        if(productsIn){
            productsIn.forEach((element,index) => {
                const productContainer = document.querySelector(`#product-${element.cateogory}-${index}`);
                if(productContainer){
                    productContainer.addEventListener('click',()=>{
                        setProductActive(element);
                        openModal()
                    })
                }else{
                    console.error(`Element with ID product-${element.cateogory}-${index} not found`);
                }
            });
        }
    }
    

    addEvent(burgers)
    addEvent(soda)
    addEvent(fries)
}
