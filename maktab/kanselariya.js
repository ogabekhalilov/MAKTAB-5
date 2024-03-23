const products = [
    { id: 1,  name: "36 VARAQLI DAFTAR", price: "3,000 som" },
    { id: 2, name: "Gelevy Ruchka",price: "2,000 so'm"},
    { id: 3, name: "Qizil Ruchka",  price: "2,000 so'm" },
    { id: 4, name: "96 Varaqli daftar",  price:" 6,000 so'm" },
    { id: 5, name: "Shtrih",  price: "5,000 so'm" }
];
const cartFromStorage = localStorage.getItem('cart');
const cart = cartFromStorage ? JSON.parse(cartFromStorage) : [];
const updateLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};
const renderCart = () => {
    const cartContainer = document.querySelector(".cart");
    cartContainer.innerHTML = "";

    cart.map((value,index) => {
        const createElement = document.createElement("div");
        createElement.classList.add("cart-item");
        createElement.innerHTML = `
   
            <p>${value.product.name}</p>
            <p>${value.product.price}</p>
            <i>Miqdori: ${value.quantity}</i>
            <b>Jami: ${value.product.price * value.quantity}</b>
            <button onclick="RemoveItme(${index})" >cleare</button>

       `;
        cartContainer.appendChild(createElement); 
    });
    const option ={
        style:"currensy",
        currensy: "USD"
    }
    const totalAmaunt = cart.reduce((total,itme) => total + itme.product.price * itme.quantity, 0)
const total = document.querySelector(".total-amount")
const FilterPrice = totalAmaunt.toLocaleString('en-US' , options)
total.innerHTML =`Ummumiy hisob:${FilterPrice}`
    total.style.background = "green"

};
const addToCart = (productId) => {
    const product = products.find(i => i.id === productId);

    if (product) {
        const existingCartItem = cart.find(i => i.product.id === productId);
        if (existingCartItem) {
            existingCartItem.quantity += 1;
        } else {
            cart.push({ product, quantity: 1 });
        }
       
        updateLocalStorage();
        renderCart();
    } else {
        console.log("Product is not found!");
    }
};
function renderProducts() {
    const productsList = document.querySelector(".product-list");
    productsList.innerHTML = "";
    products.forEach(item => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price}</p>
            <button onclick="addToCart(${item.id})">Karzinka</button>
        `;
        productsList.appendChild(productElement);
    });
}
function Click(){

    localStorage.clear()
    window.location.reload()
}

let RemoveItme = (index) =>{
    cart.splice(index ,1)
    renderCart();
    localStorage.setItem("cart",JSON.stringify(cart ))
}



renderProducts();
