let x = require('express')

let express = x()


express.get('',(req,res)=>{
    res.send('Helloo')
})

express.get('/about',(req,res)=>{
    res.send(`Welcome`)
})


express.listen(5000)