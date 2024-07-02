let express = require('express');
let mongoose = require('mongoose');

let app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Hostel_Next');

let Schema = mongoose.Schema({
    hostName:String,
    hostEmail:String,
    hostPhone:Number,
    hostLocation:String,
    hostType:String,
    hostRating:Number,
},{collection:'hostelDetails'})
let model = mongoose.model('', Schema)


app.post('/', async (req, res)=>{
    let data = await model(req.body)

    data.save()
})



app.listen(5000)