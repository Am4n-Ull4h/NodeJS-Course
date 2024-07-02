let express = require('express');
let dbConnect = require('./MongoDb')
let app = express();


app.get('/',async (req,res)=>{
    let db =await dbConnect()
    let data =await db.find({}).toArray();
    res.writeHead(200,{'content-type': 'application/json'});
    res.write(JSON.stringify(data));
    res.end();

})


app.listen(3000)