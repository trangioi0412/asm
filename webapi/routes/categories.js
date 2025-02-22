var express = require('express');
var router = express.Router();
const categoryController = require('../mongo/category/category.controller');

// 
/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    const result = await categoryController.getAllcate();
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

router.delete('/deleteCate/:id', async function(req,res){
  try{
    const {id} = req.params
    const result = await categoryController.deleteCate(id);
    return res.status(200).json({status: true, message: 'xoa thu muc thanh cong' })
  }catch(err){
    console.error(err);
    return res.status(500).json({status: false, message: 'loi xoa du lieu danh muc'});
  }
});

router.post('/addCate', async function(req,res){
  try{
    const data = req.body;
    const result = await categoryController.addCate(data);
    return res.status(200).json({status: true, result: result,message: 'them du lieu thanh cong'})
  }catch(err){
    console.log(err);
    return res.status(501).json({status: false, message: 'khong the them du lieu'})
  }
})

router.put('/updateCate/:id', async function (req,res){
  try{
    const {id} = req.params;
    const data = req.body;
    const result = await categoryController.updateCate(data,id);
    return res.status(200).json({status: true, result: result,message: 'chinh sua du lieu thanh cong'})
  }catch(err){
    console.log(err);
    return res.status(501).json({status: false, message: 'khong the chinh sua du lieu'});
  }
})

module.exports = router;