import { VCategory } from "../view/category.view.js";
import { SCategory } from "../services/category.service.js";
export class CCategory {
    index() {
        let v = new VCategory();
        let s = new SCategory();
        s.getCategory().then(data => {
            v.showCategory(data);
        });
    }
    indexAdmin() {
        let vCate = new VCategory();
        let sCate = new SCategory();
        sCate.getCategory().then(data => {
            vCate.showCateAdmin(data);
        });
    }
    actionCateAdmin = () => {
        window.onload = () => {
            let deleteCate = document.querySelectorAll('.deleteCate');
            deleteCate.forEach(element => {
                element.addEventListener('click', (e) => {
                    let target = e.target;
                    let id = target.getAttribute('data-id');
                    let sCate = new SCategory();
                });
            });
        };
    };
}
