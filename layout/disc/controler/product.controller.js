import { SCategory } from "../services/category.service.js";
import { SProduct } from "../services/product.serice.js";
import { VCategory } from "../view/category.view.js";
import { VProduct } from "../view/product.view.js";
export class CProduct {
    index() {
        let v = new VProduct();
        let sPro = new SProduct();
        sPro.getProduct().then((data) => {
            v.showNewProduct(data);
        });
    }
    indexAdmin() {
        let vPro = new VProduct();
        let sPro = new SProduct();
        sPro.getProduct().then(data => {
            vPro.showAdminPro(data);
        });
        let addUpdateP = document.getElementById('product_button');
        addUpdateP.addEventListener('click', async () => {
            let idP = document.getElementById('product_id');
            let inputBtn = document.getElementById('product_button');
            let nameP = document.getElementById('product_name');
            let price = document.getElementById('product_price');
            let star = document.getElementById('product_star');
            let comment = document.getElementById('product_comment');
            let like = document.getElementById('product_like');
            let category = document.getElementById('form_select');
            let newP = document.getElementById('product_new');
            let noNewP = document.getElementById('product_no_new');
            let checkNew = '';
            if (newP.checked) {
                checkNew = newP.value;
            }
            if (noNewP.checked) {
                checkNew = noNewP.value;
            }
            let sale = document.getElementById('product_sale');
            let brand = document.getElementById('product_brand');
            if (inputBtn.value === 'add') {
                let newProduct = {
                    name: nameP.value,
                    price: parseInt(price.value),
                    star: parseFloat(star.value),
                    comment: parseInt(comment.value),
                    like: parseInt(like.value),
                    category: category.value,
                    news: parseInt(checkNew),
                    sale: parseInt(sale.value),
                    brand: brand.value,
                };
                let SPro = new SProduct();
                SPro.addPro(newProduct);
                window.location.reload();
            }
            if (inputBtn.value = 'update') {
                let newProduct = {
                    name: nameP.value,
                    price: parseInt(price.value),
                    star: parseFloat(star.value),
                    comment: parseInt(comment.value),
                    like: parseInt(like.value),
                    category: category.value,
                    news: parseInt(checkNew),
                    sale: parseInt(sale.value),
                    brand: brand.value,
                };
                console.log(newProduct);
                let SPro = new SProduct();
                console.log(await SPro.updatePro(newProduct, idP.value));
                SPro.updatePro(newProduct, idP.value);
                window.location.reload();
            }
        });
    }
    formDisplay() {
        let buttonAddNew = document.querySelector('.product_button');
        buttonAddNew.addEventListener('click', () => {
            let form = document.getElementById('from_add');
            let vCate = new VCategory();
            let sCate = new SCategory();
            if (form) {
                form.style.display = 'block';
                sCate.getCategory().then(data => {
                    vCate.cateShowForm(data);
                });
            }
        });
        document.querySelector('.form')?.addEventListener('submit', event => {
            event.preventDefault();
        });
        let buttonClose = document.querySelector('.close_input');
        buttonClose.addEventListener('click', () => {
            let form = document.getElementById('from_add');
            if (form) {
                form.style.display = 'none';
            }
        });
        window.onload = () => {
            let updatePro = document.querySelectorAll('.updatePro');
            updatePro.forEach(element => {
                element.addEventListener('click', (e) => {
                    let target = e.target;
                    let id = target.getAttribute('data-id');
                    let inputBtn = document.getElementById('product_button');
                    inputBtn.value = 'update';
                    let form = document.getElementById('from_add');
                    if (form) {
                        let vCate = new VCategory();
                        let sCate = new SCategory();
                        form.style.display = 'block';
                        sCate.getCategory().then(data => {
                            vCate.cateShowForm(data);
                        });
                    }
                    let sPro = new SProduct();
                    sPro.getOnePro(id).then(data => {
                        let nameP = document.getElementById('product_name');
                        let idP = document.getElementById('product_id');
                        let price = document.getElementById('product_price');
                        let star = document.getElementById('product_star');
                        let comment = document.getElementById('product_comment');
                        let like = document.getElementById('product_like');
                        let category = document.getElementById('form_select');
                        let sale = document.getElementById('product_sale');
                        let brand = document.getElementById('product_brand');
                        let checkNew = document.getElementsByName('new');
                        checkNew.forEach((e) => {
                            if (e.value == data.news.toString()) {
                                e.checked = true;
                            }
                        });
                        idP.value = id;
                        nameP.value = data.name;
                        price.value = data.price.toString();
                        star.value = data.star.toString();
                        comment.value = data.comment.toString();
                        like.value = data.like.toString();
                        category.value = data.category.categoryId;
                        sale.value = data.sale.toString();
                        brand.value = data.brand;
                    });
                });
            });
            let deletePro = document.querySelectorAll('.deletePro');
            deletePro.forEach(element => {
                element.addEventListener('click', (e) => {
                    let target = e.target;
                    let id = target.getAttribute('data-id');
                    let s = new SProduct();
                    s.deletePro(id);
                    window.location.reload();
                });
            });
        };
    }
}
