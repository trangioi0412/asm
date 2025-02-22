export class MCategory {
    id : string ;
    name: string;
    img: string | undefined | null;
    constructor (id : string, name: string, img: string| undefined | null){
        this.id = id;
        this. name = name;
        this.img = img;
    }

    // id
    get Id() : string{
        return this.id
    }

    set Id (id: string){
        this,id = id;
    }

    // name
    get Name(): string{
        return this.name;
    }

    set Name(name: string){
        this.name = name;
    }

    // img
    get Img():string | undefined | null{
        return this.img;
    }

    set Img(img: string | undefined | null){
        this.img = img
    }
}