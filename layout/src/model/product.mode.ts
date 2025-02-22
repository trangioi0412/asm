interface Category {
    categoryId : string,
    categoryName: string
}

export interface IProduct {
    name: string;
    price: number;
    star: number;
    comment: number;
    like: number;
    category: Category
    news: number;
    sale: number;
    brand: string|undefined|null;
    img: string;
}

export interface IpAddPRo {
    name: string;
    price: number;
    star: number;
    comment: number;
    like: number;
    category: string;
    news: number;
    sale: number;
    brand: string|undefined|null;
    // img: string;
}

export class MProduct implements IProduct{
    id: string|number|undefined|null;
    name: string;
    price: number;
    star: number;
    comment: number;
    like: number;
    category: {
        categoryId : string,
        categoryName: string
    };
    news: number;
    sale: number;
    brand: string|undefined|null;
    img: string;

    constructor (id:string|number|undefined|null,name: string,price: number,star: number,comment: number,like: number,category: Category, news: number, sale: number,brand: string|undefined|null ,img: string){
        this.id =id;
        this.name = name;
        this.price = price;
        this.star = star;
        this.comment = comment;
        this.like = like;
        this.category = category;
        this.news = news;
        this.sale = sale;
        this.brand = brand;
        this.img = img
    }

    get Id():string|number|undefined|null{
       return this.id; 
    }

    set Id(id:string|number|undefined|null){
        this.id = id;
    }

    get Name():string{
        return this.name;
    }

    set Name(name:string){
        this.name = name;
    }

    get Price():number{
        return this.price;
    }

    set Price(price: number){
        this.price = price;
    }

    get Star():number {
        return this.star;
    }

    set Star(star:number){
        this.star = star;
    }

    get Comment():string{
        return this.Comment;
    }

    set Comment(comment:string){
        this.Comment = comment;
    }

    get Like():number{
        return this.like;
    }

    set Like(like:number){
        this.like = like;
    }

    get Category():Category{
        return this.category
    }

    set Category(category:Category){
        this.category = category;
    }

    get Img():string{
        return this.img;
    }

    set Img(img:string){
        this.img = img;
    }

    get News():number{
        return this.news
    }

    set News(news:number){
        this.news = news;
    }

}
