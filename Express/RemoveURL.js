let express = require('express')
let path = require('path')

let folderPath = path.join(__dirname,'Public')



let app = express()

// app.get('',(req,res)=>{
//     res.send('Home')
// })


// app.use(express.static(folderPath))




app.get('',(req,res)=>{
    res.sendFile(`${folderPath}/index.html`)
})

app.get('/about',(req,res)=>{
    res.sendFile(`${folderPath}/about.html`)
})

app.get('/aman',(req,res)=>{
    res.sendFile(`${folderPath}/Aman.html`)
})


app.get('*',(req,res)=>{
    res.sendFile(`${folderPath}/Error404.html`)
})


app.listen(5000)