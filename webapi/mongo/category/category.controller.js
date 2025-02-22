// thực hiện thao tác CRUD với collection categories
const productModel = require('../product/product.model');
const categoryModel = require('./category.model');

module.exports = { getAllcate, deleteCate, addCate, updateCate}

// Lấy toàn bộ dữ liệu 

async function getAllcate(){
    try{
        const cates = await categoryModel.find();
        return cates;
    }catch (err){
        console.log(err);
        throw new Error('Lỗi lấy dữ liệu danh mục');
    }
}

async function deleteCate(id){
    try{
        const cate =  await categoryModel.findById(id);
        if(!cate){
            throw new Error('Không tìm thấy danh mục')
        }
        const pro = await productModel.find({'category.categoryId' : id});
        if(pro){
            throw new Error('Danh Muc van con san pham');
        }
        const result = await productModel.findByIdAndDelete(id);
        return result;
    }catch(err){
        console.log(err);
        throw new Error('Loi xoa danh muc');
    }
}

async function addCate(data){
    try{
        const {name,img} = data;
        const newCate = new categoryModel({name,img});
        const result = await newCate.save();
        return result;
    }catch(err){
        console.error(err);
        throw new Error('Loi them danh muc');
    }
}

async function updateCate(data,id){
    let cate = await categoryModel.findById(id);

    if(!cate){
        throw new Error('Loi update danh muc');
    }

    const {name,img} = data;
    
    const result = await productModel.findByIdAndUpdate(id,{name,img},{new: true});
    return result;
}