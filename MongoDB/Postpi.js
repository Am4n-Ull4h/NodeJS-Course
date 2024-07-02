let express = require('express');
let dbConnect = require('./MongoDb')
let app = express();


app.use(express.json())

app.post('/',async (req,res)=>{
    let hh = await dbConnect()
    let formate = await hh.insertOne(req.body)
    res.send('Helloo')
})

app.listen(5000)