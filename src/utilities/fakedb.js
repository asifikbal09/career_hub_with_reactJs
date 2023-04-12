// use local storage to manage cart data
const addToDb = id => {
    let appliedJob = getShoppingCart();
    // add quantity
    const quantity = appliedJob[id];
    if (!quantity) {
        appliedJob[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        appliedJob[id] = newQuantity;
    }
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJob));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('applied-jobs', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const appliedJobs = localStorage.getItem('applied-jobs');
    if (appliedJobs) {
        shoppingCart = JSON.parse(appliedJobs);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('applied-jobs');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
