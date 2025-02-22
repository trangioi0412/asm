// kết nối || tạo collection categories
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    name: {type: String, require: true},
    price: {type: Number, require: true},
    star: {type: Number, require: false, default:0},
    comment: {type: Number, require: false, default:0},
    like: {type: Number, require: false, default:0},
    news: {type: Number, require: false, default:0},
    sale: {type: String, require: false, default:0},
    brand: {type: String, require: false},
    category: {
        categoryId : {type: ObjectId, require: true},
        categoryName: {type: String, require: true}
    },
    img: {type: String, require: false},
})

module.exports = mongoose.models.product || mongoose.model('product', productSchema);