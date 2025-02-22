var express = require('express');
var router = express.Router();
var productController = require('../mongo/product/product.controller');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./public/images')
  },
  filename: function(req,file,cb){
    cb(null,file.originalname);
  }
});

const checkFile = (req,file,cb)=>{
  if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)){
    return cb(new Error('Ban chi duoc upload file anh'))
  }
    return cb(null,true)
}
const upload = multer ({storage: storage, fileFilter: checkFile});

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    const result = await productController.getAllpro();
    if(result){
      return res.status(200).json({status: true, result,message: 'lấy dữ liệu thành công'})
    }else{
      return res.status(404).json({status: false, message: 'Không thể lấy dữ liệu trên server'})
    }
  }catch(err){
    console.error(err);
    return res.status(500).json({status: false, message: 'Lỗi lấy dữ liệu'})
  }
});

router.get('/getone', async function (req,res){
  try{
    const result = await productController.getOnePro();
    return res.status(201).json({status: true, result, message: 'lay du lieu thanh cong'})
  }catch(err){
    console.log(err);
    return res.status(500).json({status: false, message: 'loi lay du lieu'})
  }
});

router.get('/getDetail/:id', async function (req,res){
  let {id} = req.params;
  try{
    const result = await productController.getProDetail(id);
    return res.status(201).json({status: true, result: result, message: 'lay du lieu thanh cong'})
  }catch(err){
    console.log(err);
    return res.status(500).json({status: false, message: 'loi lay du lieu'})
  }
});

router.post('/addPro',upload.single('img') ,async function (req,res){
  try{
    const data = req.body;
    // data.img = req.file.originalname
    const result = await productController.addPro(data);
    return res.status(201).json({status: true, dataNew: result ,message: 'them du lieu thanh cong'})
  }catch(err){
    console.log(err);
    return res.status(501).json({status: false, message: 'khong the them du lieu'})
  }
});

router.put('/updatePro/:id', upload.single('img'),async function(req,res){
  try{
    const {id} = req.params;
    const data = req.body;
    // if(req.file){
    //   data.img = req.file.originalname;
    // }else{
    //   delete data.img;
    // }
    const result = await productController.upadtePro(data,id);
    return res.status(201).json({status: true, dataNew: result ,message: 'them du lieu thanh cong'})
  }catch(err){
    console.log(err);
    return res.status(501).json({status: false, message: 'khong the update du lieu'})
  }
})

router.delete('/deletePro/:id', async function(req,res){
  try{
    const {id} = req.params;
    const result = await productController.deletePro(id);
    return res.status(201).json({status: true, dataNew : result, message: 'khong the xoa san pham'});
  }catch(err){
    console.log(err);
    return res.status(501).json({status: false, message: 'khong the xoa du lieu'});
  }
})

module.exports = router;
