export class MProduct {
    id;
    name;
    price;
    star;
    comment;
    like;
    category;
    news;
    sale;
    brand;
    img;
    constructor(id, name, price, star, comment, like, category, news, sale, brand, img) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.star = star;
        this.comment = comment;
        this.like = like;
        this.category = category;
        this.news = news;
        this.sale = sale;
        this.brand = brand;
        this.img = img;
    }
    get Id() {
        return this.id;
    }
    set Id(id) {
        this.id = id;
    }
    get Name() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }
    get Price() {
        return this.price;
    }
    set Price(price) {
        this.price = price;
    }
    get Star() {
        return this.star;
    }
    set Star(star) {
        this.star = star;
    }
    get Comment() {
        return this.Comment;
    }
    set Comment(comment) {
        this.Comment = comment;
    }
    get Like() {
        return this.like;
    }
    set Like(like) {
        this.like = like;
    }
    get Category() {
        return this.category;
    }
    set Category(category) {
        this.category = category;
    }
    get Img() {
        return this.img;
    }
    set Img(img) {
        this.img = img;
    }
    get News() {
        return this.news;
    }
    set News(news) {
        this.news = news;
    }
}
