let dbConnect = require('./MongoDb');

let main = async ()=>{
    let db = await dbConnect()


    db.insertMany(
        [{name:'4th Video',title:'Movie',user:'Asad',num :'878787'},
        {name:'4th Video',title:'Movie',user:'Asad',num :'878787'},
        {name:'4th Video',title:'Movie',user:'Asad',num :'878787'}
        ]
    )
    // db.updateOne({name:'4th Video'},{user:'SHAFIQUE',num :90000})

}

main()