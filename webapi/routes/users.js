var express = require('express');
var router = express.Router();
var usersController = require('../mongo/users/user.controller')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    const result = await usersController.getAlluser();
    if(result){
      return res.status(200).json({status: true, result,message: 'lấy dữ liệu thành công'})
    }else{
      return res.status(404).json({status: false, message: 'Không thể lấy dữ liệu trên server'})
    }
  }catch(err){
    console.error(err);
    return res.status(500).json({status: false, message: 'Lỗi lấy dữ liệu danh mục'})
  }
});
module.exports = router;
