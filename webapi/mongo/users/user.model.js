// kết nối || tạo collection users
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    sdt: {type: String, require: false},
    role: {type: Number, require: true},
    userName: {type: String, require: true},
    password: {type: String, require: true},
    address: {type: String, require: false},
})

module.exports = mongoose.models.user || mongoose.model('user', userSchema)