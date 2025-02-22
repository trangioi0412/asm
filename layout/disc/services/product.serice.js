import { MProduct } from "../model/product.mode.js";
export class SProduct {
    root = 'http://localhost:3000/product';
    async getProduct() {
        let res = await fetch(this.root);
        let data = await res.json();
        let products = data.result.map((c) => {
            return new MProduct(c._id, c.name, c.price, c.star, c.comment, c.like, c.category, c.news, c.sale, c.brand, c.img);
        });
        return products;
    }
    async deletePro(id) {
        try {
            const option = {
                method: "DELETE",
            };
            await fetch(`${this.root}/deletePro/${id}`, option);
        }
        catch (err) {
            console.error(err);
        }
    }
    async addPro(data) {
        try {
            const option = {
                method: "POST",
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            const response = await fetch(this.root + '/addPro', option);
            return await response.json();
        }
        catch (err) {
            console.error(err);
        }
    }
    async getOnePro(id) {
        let res = await fetch(this.root + '/getDetail/' + id);
        let data = await res.json();
        let product = new MProduct(data.result._id, data.result.name, data.result.price, data.result.star, data.result.comment, data.result.like, data.result.category, data.result.news, data.result.sale, data.result.brand, data.result.img);
        return product;
    }
    async updatePro(data, id) {
        try {
            const option = {
                method: "PUT",
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            const response = await fetch(this.root + '/updatePro/' + id, option);
            return await response.json();
        }
        catch (err) {
            console.error(err);
        }
    }
}
