import { MCategory } from '../model/category.model.js';
export class SCategory {
    root = 'http://localhost:3000/category';
    async getCategory() {
        let res = await fetch(this.root);
        let data = await res.json();
        let categories = data.result.map((c) => {
            return new MCategory(c._id, c.name, c.img);
        });
        return categories;
    }
}
