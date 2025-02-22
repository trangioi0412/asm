export class MCategory {
    id;
    name;
    img;
    constructor(id, name, img) {
        this.id = id;
        this.name = name;
        this.img = img;
    }
    // id
    get Id() {
        return this.id;
    }
    set Id(id) {
        this, id = id;
    }
    // name
    get Name() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }
    // img
    get Img() {
        return this.img;
    }
    set Img(img) {
        this.img = img;
    }
}
