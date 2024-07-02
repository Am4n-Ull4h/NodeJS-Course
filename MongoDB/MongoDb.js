let { MongoClient } = require('mongodb')
let url = 'mongodb://localhost:27017'

let add = new MongoClient(url)

async function hh(){
    let connect = await add.connect();
    let db = connect.db('yt')
    let coll = db.collection('videos')

    return coll
}


module.exports = hh