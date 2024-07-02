let express = require('express')



let app = express()


let reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send('Please provide Age')




    }
    else if(req.query.age > 18){
        res.send('Eligible')
    }
    else{
        // res.send('Enter age')
        next();
    }


}



app.use(reqFilter)




app.get('/',(req,res)=>{
    res.send('Welcome to Home Page')
})


app.get('/user',(req,res)=>{
    res.send('Welcome to User Page')
})




app.listen(5000)