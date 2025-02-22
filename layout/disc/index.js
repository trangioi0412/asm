import { CCategory } from "./controler/category.controller.js";
import { CProduct } from "./controler/product.controller.js";
let category = new CCategory();
category.index();
let product = new CProduct();
product.index();
document.getElementById('closeCard')?.addEventListener('click', () => {
    let cart = document.getElementById('cart');
    cart.style.display = 'none';
});
document.getElementById('cart_icon')?.addEventListener('click', () => {
    let cart = document.getElementById('cart');
    cart.style.display = 'flex';
});
document.getElementById('form')?.addEventListener('click', (event) => {
    let form = document.querySelector('.form_login');
    let formB = document.getElementById('form');
    console.log(event);
    if (!form.contains(event.target)) {
        console.log(0);
        formB.style.display = 'none';
    }
});
document.querySelector('.form_login_close')?.addEventListener('click', () => {
    let formB = document.getElementById('form');
    formB.style.display = 'none';
});
document.querySelector('.action_login')?.addEventListener('click', () => {
    let formB = document.getElementById('form');
    formB.style.display = 'block';
});
