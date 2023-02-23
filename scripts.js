const minusButton = document.querySelector(".minus__image");
const plusButton = document.querySelector(".plus__image");
const quantity = document.querySelector(".quantity");
const addToCartBotton = document.querySelector(".add-to-cart--botton");
const cartQuantity = document.querySelector(".cart__quantity");
const cartContent = document.querySelector(".open-cart__container");
const cartIcon = document.querySelector(".cart__container");
const emptyCart = document.querySelector(".cart-content--empty");
const openCartQuantity = document.querySelector(".cart-quantity");
const trashButton = document.querySelector(".delete__container");
const hamburguerMenuIcon = document.querySelector(".menu__icon");
const openCart = document.querySelector(".open-cart__container");
let contador = 0;
let cartItems = 0;
let clickIntro = 0;



hamburguerMenuIcon.addEventListener("click", () => {

});


minusButton.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        quantity.textContent = contador;
    }
});

plusButton.addEventListener("click", () => {
    contador++;
    quantity.textContent = contador;
});

addToCartBotton.addEventListener("click", () => {
    if(contador!=0)
        cartQuantity.classList.remove("hidden");
    console.log("contador:" + contador);
    cartItems +=contador;
    quantity.textContent = 0;
    cartQuantity.textContent = cartItems;
    contador=0;
});


cartIcon.addEventListener("click", () => {
    cartContent.classList.toggle("hidden");
    if(cartItems != 0) {
        emptyCart.classList.add("hidden");
        document.querySelector(".cart-content--filled").classList.remove("hidden");
    } else {
        emptyCart.classList.remove("hidden");
        document.querySelector(".cart-content--filled").classList.add("hidden");
    }
    openCartQuantity.textContent = cartItems;
    document.querySelector(".cart__content--price2").textContent = "$" + (125*cartItems);
});

trashButton.addEventListener("click", () => {
    cartItems = 0;
    cartQuantity.textContent = cartItems;
});


function closeCart() {

}

document.addEventListener("click", (e) => {
    const isClosest = e.target.closest
});
