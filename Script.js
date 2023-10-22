const addressbtn = document.querySelector('#address-form')
const addresclose = document.querySelector('#address-close')


addressbtn.addEventListener("click", function () {
    document.querySelector('.address-form').style.display = "flex"
})
addresclose.addEventListener("click", function () {
    document.querySelector('.address-form').style.display = "none"
})
//slider-----------------------------------------------------
/*P6 - P7 - P8*/
const rightbtn = document.querySelector('.fa-chevron-right')
rightbtn.addEventListener("Click", function () {

    document.querySelector(".slider-content-left-top").style.right = "100%"
})


/*P9*/
//-----------------------------------------------------slider-product------------------------

const rightbtntwo = document.querySelector('.fa-chevron-right-two');
const leftbtntwo = document.querySelector('.fa-chevron-left-two');
const itemsContent = document.querySelector(".slider-product-one-content-items-content");
const imgNumbertwo = document.querySelectorAll('.slider-product-one-content-items');
let index = 0; // Initialize the index

rightbtntwo.addEventListener("click", function () {
    index = (index + 1) % imgNumbertwo.length;
    itemsContent.style.right = index * 100 + "%";
});

leftbtntwo.addEventListener("click", function () {
    index = (index - 1 + imgNumbertwo.length) % imgNumbertwo.length;
    itemsContent.style.right = index * 100 + "%";
});
/*--------LOGIM/REGISTER----------*/

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
document.querySelector("body > section.main-container > div.daily-sg > div.option-sg")