import { handleGetProductLocalStorage, setInLocalStorage } from "../persistance/localStorage.js";
import { activeProduct, handleGetProductsStore, handleRenderList, setProductActive } from "../views/store.js";
import Swal from "sweetalert2";

const buttonAdd = document.querySelector(".addProductBututton");
const closeModel = document.querySelector('#cancel');
const submitmodal = document.querySelector("#acept");
const delateButton=document.querySelector("#erase");

buttonAdd.addEventListener('click', () => {
    openModal()
});
submitmodal.addEventListener('click', () => {
    submitPrduct();
    handleGetProductsStore();
});

closeModel.addEventListener('click', () => {
    closeModal()
    
});

const modal = document.querySelector('.popUpContainer_principal');

export const openModal=()=>{
    if(activeProduct){
        let name = document.querySelector('#name'),
        img = document.querySelector("#img"),
        precio = document.querySelector("#price"),
        cateogory = document.querySelector("#category");
        name.value=activeProduct.name;
        img.value=activeProduct.img;
        precio.value=activeProduct.precio;
        cateogory.value=activeProduct.cateogory;
    }
    modal.style.display = 'flex';
    if(activeProduct){
        delateButton.style.display="block"
    }else{
        delateButton.style.display="none"
    }
}
export const resetModal=()=>{
    let name = document.querySelector('#name'),
        img = document.querySelector("#img"),
        precio = document.querySelector("#price"),
        cateogory = document.querySelector("#category");
    name.value="";
    img.value=""
    precio.value=0
    cateogory.value="Seleccione una categoria"
}
export const closeModal=()=>{
    modal.style.display = 'none';
    setProductActive(null);
    resetModal()
}

export const submitPrduct = () => {
    let name = document.querySelector('#name').value,
        img = document.querySelector("#img").value,
        precio = document.querySelector("#price").value,
        cateogory = document.querySelector("#category").value;
        let object=null;
        if(activeProduct){
            object={...activeProduct,name, img, precio, cateogory}
        }else{
            object = {
                id: new Date().toISOString(),
                name, img, precio, cateogory
            };
        }
    Swal.fire({
        title: "Good job!",
        text: "operation complete",
        icon: "success"
      });
    setInLocalStorage(object);
    closeModal()
    handleGetProductsStore()
}

delateButton.addEventListener("click",()=>{
    handleDelateProduct()
})
export const handleDelateProduct=()=>{

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products=handleGetProductLocalStorage()
            console.log(products)
            const result=products.filter(e=>e.id!==activeProduct.id)
            localStorage.setItem("products",JSON.stringify(result))
            const newProducts=handleGetProductsStore()
            closeModal()
            handleRenderList(newProducts)
        }else{
            closeModal()
        }
      });
}