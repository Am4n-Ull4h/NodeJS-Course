let express = require('express');
let app = express();
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yt')


// app.use(express.json());

let Schema = mongoose.Schema({
    name:String,
    title:String,
    user:String,
    num:Number
})


let model = mongoose.model('videos', Schema)


 app.get('/:key',async (req, res) => {
    //  res.send(req.params.key);

        let data =await model.find(
            {
                '$or': [
                    {
                        'title': {$regex: req.params.key}
                    }
                ]
            }
        )

        console.log(data)
 })



 app.listen(5000)