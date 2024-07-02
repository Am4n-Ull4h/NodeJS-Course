let mongoose = require('mongoose')
let express = require('express');

let app = express();

mongoose.connect('mongodb://localhost:27017/yt');


app.use(express.json());

let sch = mongoose.Schema({
    name:String,
    title:String,
    user:String,
    num:Number
})


let model = mongoose.model('videos',sch)

app.post('/',async (req,res) => {
    // FIND DATA 


    // let data = await model.find()
    // res.send(data)
    // console.log(data)


    // INSERT DATA

    // let data = model(req.body)
    // await data.save()
    // res.send('Added')




 
})



// DELETE DATA

// app.delete('/:_id',async (req,res)=>{
//     let data = await model.deleteOne(req.params)
//     res.send('Deleted')
// })


// UPDATE DATA

app.put('',async (req,res)=>{
    let data = await model.updateOne({name:'11th Video'},{$set:{title:'Cricket Video'}})
    res.send('Updated')
})







app.listen(5000)