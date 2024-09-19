import { handleGetProductLocalStorage } from "../persistance/localStorage";
import { handleRenderList } from "../views/store";

export const handleSearch = ()=>{
    const searchButton=document.querySelector(".searchButton");
        searchButton.addEventListener("click",()=>{
            const inputSearchBar=document.querySelector(".inputSearch").value;
            const products=handleGetProductLocalStorage()
            console.log(inputSearchBar)
            console.log(products)
            const result=products.filter(e=>
            e.name.toLowerCase().includes(inputSearchBar.toLowerCase())
    )    
    handleRenderList(result)   
        })       
}
