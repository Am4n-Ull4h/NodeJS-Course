let express = require('express')
let path = require('path')

let publicPath = path.join(__dirname,'Public')


let app  = express()

app.use(express.static(publicPath))




app.listen(5000)