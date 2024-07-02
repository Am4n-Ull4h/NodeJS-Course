let aa = require('mongoose')


aa.connect('mongodb://localhost:27017/yt')

let amanSch = aa.Schema({
    name:String,
    num:Number
})


    let amanModel = aa.model('videos',amanSch)

let data = amanModel({
    name:'Sikander',
    num:123
})

  data.save()

