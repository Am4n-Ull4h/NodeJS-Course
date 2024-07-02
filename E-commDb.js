let mongoose = require('mongoose');

let schema = mongoose.Schema({
    userName:String,
    userEmail:String,
    userPass:String,
})


let model = new mongoose.model('Users', schema)


module.exports = model