// thực hiện thao tác CRUD với collection categories
const categoryModel = require('./category.model');

module.exports = { getAllcate }

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