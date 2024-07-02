let aman = require('mongoose')

aman.connect('mongodb://localhost:27017/yt')

let sch = aman.Schema({
    name : String,
    age : Number
})

// let update = async () => {
//     let mod = aman.model('videos',sch)

// let upd =await mod.updateOne({name:'Sikander'},{$set: {name: 'SikU'}})

// }


// update()




let del = async () => {
    let mod = aman.model('videos',sch)

let upd =await mod.deleteOne({name:'SikU'})

}


del()

