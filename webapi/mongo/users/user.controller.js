// thực hiện thao tác CRUD với collection users
const userModel = require('./user.model');

module.exports = { getAlluser }

// Lấy toàn bộ dữ liệu 

async function getAlluser(){
    try{
        const users = await userModel.find();
        return users;
    }catch (err){
        console.log(err);
        throw new Error('Lỗi lấy dữ liệu danh mục');
    }
} 