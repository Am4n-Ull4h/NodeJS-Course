let dbConnect = require('./MongoDb')




let main = async () => {
    let db = await dbConnect()

    db.updateOne({ name:'4th Video'},{$set:{user:'SHAFIQUE AHMED',title:'Islamic Videos'}})

    // db.deleteOne({ name:'4th Video'})


}

main()