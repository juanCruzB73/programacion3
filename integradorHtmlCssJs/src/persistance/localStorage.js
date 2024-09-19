export const handleGetProductLocalStorage = () => {
    const product = JSON.parse(localStorage.getItem("products"));
    if (product) {
        return product;
    } else {
        return [];
    }
};

export const setInLocalStorage = (productIn) => {
    let productInLocal = handleGetProductLocalStorage();
    const existingProductIndex = productInLocal.findIndex((productInLocal) =>
        productInLocal.id === productIn.id
    );
    if (existingProductIndex !== -1) {
        productInLocal[existingProductIndex] = productIn;
    } else {
        productInLocal.push(productIn);
    }
    localStorage.setItem("products", JSON.stringify(productInLocal));
};
