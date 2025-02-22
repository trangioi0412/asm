import { SCategory } from "../services/category.service.js";
import { SProduct } from "../services/product.serice.js";
import { VCategory } from "../view/category.view.js";
 import { VProduct } from "../view/product.view.js";
 
 export class CProduct {
    public index(): void{
        let v = new VProduct();
        let sPro = new SProduct();
        sPro.getProduct().then((data) => {
            v.showNewProduct(data);
        })
    }

    public indexAdmin() :void {
        let vPro = new VProduct();
        let sPro = new SProduct();
        sPro.getProduct().then(data => {
            vPro.showAdminPro(data);
        })

        let addUpdateP = document.getElementById('product_button') as HTMLInputElement;
        addUpdateP.addEventListener('click', async () => {
            let idP = document.getElementById('product_id') as HTMLInputElement;
            let inputBtn = document.getElementById('product_button') as HTMLInputElement;
            let nameP = document.getElementById('product_name') as HTMLInputElement;
            let price = document.getElementById('product_price') as HTMLInputElement;
            let star = document.getElementById('product_star') as HTMLInputElement;
            let comment = document.getElementById('product_comment') as HTMLInputElement;
            let like  = document.getElementById('product_like') as HTMLInputElement;
            let category = document.getElementById('form_select') as HTMLInputElement;
            let newP = document.getElementById('product_new') as HTMLInputElement;
            let noNewP = document.getElementById('product_no_new') as HTMLInputElement;
            let checkNew = '';
            
            if(newP.checked) {
                checkNew = newP.value;
            }
            if(noNewP.checked){
                checkNew = noNewP.value 
            }
            let sale = document.getElementById('product_sale') as HTMLInputElement;
            let brand = document.getElementById('product_brand') as HTMLInputElement;
            
            if(inputBtn.value === 'add'){
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
                }
                let SPro = new SProduct();
                SPro.addPro(newProduct)
                window.location.reload();
            }

            if(inputBtn.value = 'update'){
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
                }
                console.log(newProduct);
                let SPro = new SProduct();
                console.log(await SPro.updatePro(newProduct,idP.value))
                SPro.updatePro(newProduct,idP.value);
                window.location.reload()
            }
        })
    }

    public formDisplay() :void {
        let buttonAddNew = document.querySelector('.product_button') as HTMLButtonElement;

        buttonAddNew.addEventListener('click' , () => {
            let form = document.getElementById('from_add') as HTMLElement;
            let vCate = new VCategory();
            let sCate = new SCategory();
            if(form){
                form.style.display = 'block';
                sCate.getCategory().then(data=> {
                    vCate.cateShowForm(data);
                })
            }
        })

        document.querySelector('.form')?.addEventListener('submit', event => {
            event.preventDefault();
        })

        let buttonClose = document.querySelector('.close_input') as HTMLButtonElement;

        buttonClose.addEventListener('click', () => {
            let form = document.getElementById('from_add');
            if(form){
                form.style.display = 'none';
            }
        })
        
        window.onload = () => {
            let updatePro = document.querySelectorAll('.updatePro'); 
            updatePro.forEach(element => {
                element.addEventListener('click', (e) => {
                    let target = e.target as HTMLButtonElement;
                    let id = target.getAttribute('data-id') as string;
                    let inputBtn = document.getElementById('product_button') as HTMLInputElement;
                    inputBtn.value = 'update';
                    let form = document.getElementById('from_add');
                    if(form){
                        let vCate = new VCategory();
                        let sCate = new SCategory();
                        form.style.display = 'block';
                        sCate.getCategory().then(data=> {
                            vCate.cateShowForm(data);
                        })
                    }
                    let sPro = new SProduct();
                    sPro.getOnePro(id).then(data => {
                        let nameP = document.getElementById('product_name') as HTMLInputElement;
                        let idP = document.getElementById('product_id') as HTMLInputElement;
                        let price = document.getElementById('product_price') as HTMLInputElement;
                        let star = document.getElementById('product_star') as HTMLInputElement;
                        let comment = document.getElementById('product_comment') as HTMLInputElement;
                        let like  = document.getElementById('product_like') as HTMLInputElement;
                        let category = document.getElementById('form_select') as HTMLInputElement;
                    
                        let sale = document.getElementById('product_sale') as HTMLInputElement;
                        let brand = document.getElementById('product_brand') as HTMLInputElement;
                        
                        
                        let checkNew = document.getElementsByName('new') as NodeListOf<HTMLInputElement>;
                        checkNew.forEach((e) => {
                            if(e.value == data.news.toString()){
                                e.checked = true
                            }
                        })
                        
                        idP.value = id;
                        nameP.value = data.name;
                        price.value = data.price.toString();
                        star.value = data.star.toString();
                        comment.value = data.comment.toString();
                        like.value = data.like.toString();
                        category.value = data.category.categoryId;
                        sale.value = data.sale.toString();
                        brand.value = data.brand as string;
                    })
                });
            });
            
            
            let deletePro = document.querySelectorAll('.deletePro');
            deletePro.forEach(element=> {
                element.addEventListener('click',(e) => {
                    let target = e.target as HTMLButtonElement;
                    let id = target.getAttribute('data-id') as string;
                    let s = new SProduct();
                    s.deletePro(id);     
                    window.location.reload()
                })
            })
        }
        }

    }