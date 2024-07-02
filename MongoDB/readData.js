let dbConnect = require('./MongoDb');

// dbConnect().then((res)=>{
//     res.find({}).toArray().then((res2)=>{
//         console.log(res2)

        
//     })
// })


let main = async () => {
    let hh = await dbConnect()

    let formate =await hh.find({}).toArray()

    console.log(formate)
}


main()