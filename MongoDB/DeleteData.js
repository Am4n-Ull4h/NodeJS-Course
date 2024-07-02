let dbConnect = require('./MongoDb')


let main = async () => {
    let db = await dbConnect()

    db.deleteMany({ title:'Vlog'})

    // db.insertMany([
    //     {name:'1st Video',user:'Sami',title:'Vlog',num:1111},
    //     {name:'1st Video',user:'Sami',title:'Vlog',num:1111},
    //     {name:'1st Video',user:'Sami',title:'Vlog',num:1111},
    // ])
}

main()