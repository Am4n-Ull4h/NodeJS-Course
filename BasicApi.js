let aman = require('http')
let data = require('./ApiData')



aman.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'application\json'})
    res.write(JSON.stringify(
        data
    ))
    res.end()
}).listen(4700)