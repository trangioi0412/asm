import { VCategory } from "../view/category.view.js";
import { SCategory } from "../services/category.service.js";

export class CCategory {
    public index(): void{
        let v = new VCategory();
        let s = new SCategory();
        s.getCategory().then(data => {
            v.showCategory(data);
        })
    }
}