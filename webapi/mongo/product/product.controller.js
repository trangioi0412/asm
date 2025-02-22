// thực hiện thao tác CRUD với collection categories
const productModel = require('./product.model');
const categoryModel = require('../category/category.model');

module.exports = { getAllpro, getOnePro, getProDetail, addPro, upadtePro, deletePro}

// Lấy toàn bộ dữ liệu 

async function getAllpro(){
    try{
        const products = await productModel.find();
        return products;
    }catch (err){
        console.log(err);
        throw new Error('Lỗi lấy dữ liệu');
    }
}

async function getOnePro(){
    try{
        // lay theo so luong du lieu
        const result = await productModel.find().limit(2).sort({_id: -1});
        const result1 = await productModel.find({
            // $gt: lon hon, $lt: nho hon, $gte: lon hon hoac bnag , $lte: nho hon hoac bang
            price: {$gt : 400000}
        },{name:1,price: 1, image: 1})
        // 
        const result2 = await productModel.find({$and: [
            {price: {$gt: 20000}},
            {like: {$lt: 30}}
        ]})
        // or: []
        // Select * from products where name like '%mo%
        const result3 = await productModel.find({
            name: {
                $regex: 'nike', //tim kiem 
                $options: 'i' // tim kiem khong phan biet tim kiem hoa vs thuong
            }
        })

        return result3;
    }catch (err){
        console.log(err);
        throw new Error('Loi lay du lieu');
    }
}

async function getProDetail(id) {
    try{
        const result = await productModel.findById(id);
        return result;
    }catch(err){
        console.log(err);
        throw new Error('Loi lay du lieu');
    }
}


// ham them du lieu 
async function addPro(data){
    try{
        //  lay du lieu tu form
        const {name,price,star,comment,like,category,news,sale,brand,img} = data;
        const categoryFind = await categoryModel.findById(category);

        if(!categoryFind){
            throw new Error('Danh muc khong ton tai');
        }
        // tao ra document moi;
        const newPro = new productModel({
            name,price,star,comment,like,
            category:{
                categoryId: categoryFind._id,
                categoryName: categoryFind.name
            },news,sale,brand,img
        })
        // luu db
        const result = await newPro.save();
        return result;
    }catch(err){
        console.log(err);
        throw new Error('Loi them du lieu san pham');
    }
}

async function upadtePro(data, id){
    try{
        const pro = await productModel.findById(id);
        if(!pro){
            throw new Error('san pham khong ton tai');
        }

        const {name,price,star,comment,like,category,news,sale,brand,img} = data;
        let categoryFind = null;
        if(category){
            categoryFind = await categoryModel.findById(category);
        }

        let categoryUpdate = categoryFind ? {
            categoryId : categoryFind._id,
            categoryName: categoryFind.name
        }:pro.category;

        const result = await productModel.findByIdAndUpdate(id,{name,price,star,comment,like,categoryUpdate,news,sale,brand,img},{new: true});
        return result;
    }catch(err){
        console.log(err);
        throw new Error('Loi update du lieu san pham');
    }
}

async function deletePro(id){
    try{
        const result = await productModel.findByIdAndDelete(id);
        return result;
    }catch(err){
        console.log(err);
        throw new Error('Loi update du lieu san pham');
    }
}