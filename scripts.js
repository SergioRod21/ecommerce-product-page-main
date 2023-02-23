const minusButton = document.querySelector(".minus__image");
const plusButton = document.querySelector(".plus__image");
const quantity = document.querySelector(".quantity");
const addToCartBotton = document.querySelector(".add-to-cart--botton");
let contador = 0;
let cartItems = 0;

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
    console.log(contador);
    cartItems +=contador;
    console.log("cart items: " + cartItems);
})