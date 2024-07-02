let  { MongoClient } = require('mongodb')
let dbUrl = 'mongodb://localhost:27017'

let add = new MongoClient(dbUrl)

async function hh(){
    let connect = await add.connect();
    let db = connect.db('yt')
    let coll = db.collection('videos')

    let formate =await coll.find({}).toArray()

    console.log(formate)
}

hh()