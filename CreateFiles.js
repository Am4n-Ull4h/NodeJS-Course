let path = require('path')
let fs = require('fs')





let dirName = path.join(__dirname, 'ManyFile')



for(let i =0 ; i < process.argv[3]; i++){
    fs.writeFileSync(dirName+`/${process.argv[2]+i}.html`,'Hellooo')
}


