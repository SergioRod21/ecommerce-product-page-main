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
const hamburguerMenu = document.querySelector(".hamburger-menu__container");
const openCart = document.querySelector(".open-cart__container");
const closeMenu = document.querySelector(".close-image");
const lightbox = document.querySelector(".lightbox");
const mainImage = document.querySelector(".main-image");
const lightboxMainImage = document.querySelector(".lightbox-main-image");
const backButton = document.querySelector(".back__button");
const nextButton = document.querySelector(".next__button");
const lightboxBackButton = document.querySelector(".lightbox-back__button");
const lightboxNextButton = document.querySelector(".lightbox-next__button");
const closeLightbox = document.querySelector(".lightbox-close-button__container")

let contador = 0;
let cartItems = 0;
let clickIntro = 0;
let posImage = 0;

const images = ["./images/image-product-1.jpg","./images/image-product-2.jpg", "./images/image-product-3.jpg","./images/image-product-4.jpg"];


backButton.addEventListener("click", () => {
    if (posImage > 0) posImage--;
    else posImage = 3;
    mainImage.src = images[posImage];
});

nextButton.addEventListener("click", () => {
    if (posImage < 3) posImage++;
    else posImage = 0;
    mainImage.src = images[posImage];
});





hamburguerMenuIcon.addEventListener("click", () => {
    hamburguerMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
    hamburguerMenu.classList.add("hidden");
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


mainImage.addEventListener("click", () => {
    lightbox.classList.remove("hidden");
    lightboxMainImage.src = mainImage.src;
});


document.querySelector(".min-image1").addEventListener("click", () => {
    mainImage.src = "./images/image-product-1.jpg";
    posImage = 0;
})
document.querySelector(".min-image2").addEventListener("click", () => {
    mainImage.src = "./images/image-product-2.jpg";
    posImage = 1;
})
document.querySelector(".min-image3").addEventListener("click", () => {
    mainImage.src = "./images/image-product-3.jpg";
    posImage = 2;
})
document.querySelector(".min-image4").addEventListener("click", () => {
    mainImage.src = "./images/image-product-4.jpg";
    posImage = 3;
})

//Lightbox

lightboxBackButton.addEventListener("click", () => {
    if (posImage > 0) posImage--;
    else posImage = 3;
    lightboxMainImage.src = images[posImage];
});

lightboxNextButton.addEventListener("click", () => {
    if (posImage < 3) posImage++;
    else posImage = 0;
    lightboxMainImage.src = images[posImage];
});


document.querySelector(".lightbox-min-image1").addEventListener("click", () => {
    lightboxMainImage.src = "./images/image-product-1.jpg";
    posImage = 0;
})
document.querySelector(".lightbox-min-image2").addEventListener("click", () => {
    lightboxMainImage.src = "./images/image-product-2.jpg";
    posImage = 1;
})
document.querySelector(".lightbox-min-image3").addEventListener("click", () => {
    lightboxMainImage.src = "./images/image-product-3.jpg";
    posImage = 2;
})
document.querySelector(".lightbox-min-image4").addEventListener("click", () => {
    lightboxMainImage.src = "./images/image-product-4.jpg";
    posImage = 3;
})

closeLightbox.addEventListener("click", () => {
    lightbox.classList.add("hidden");
})

