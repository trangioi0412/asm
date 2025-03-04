import { MCategory } from '../model/category.model.js'

export class SCategory {
    root:string = 'http://localhost:3000/category'; 
    public async getCategory(){
        let res = await fetch(this.root);
        let data = await res.json();
        let categories: MCategory[] = data.result.map((c:any) => {
            return new MCategory(c._id,c.name,c.img)  
        })
        return categories;
    }

    public async deleteCate(id: string) {
        try{
            const option = {
                method: "DELETE",
            }
            await fetch(`${this.root}/deletePro/${id}`, option);
        }catch (err){
            console.error(err);
        }
    }
}